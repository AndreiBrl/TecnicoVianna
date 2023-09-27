import { TouchableOpacity, Text, View, Image, StyleSheet, Pressable, Platform, ScrollView } from "react-native"
import { useFonts } from "../../../node_modules/expo-font/build/FontHooks"
import cyborg from "../../../assets/img/cyborg.png"
import { RadioButton, TextInput } from "react-native-paper"
import { useState } from "react"
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from "react-native-safe-area-context"







const CadastroView = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'cyberFont': require('../../../assets/fontes/cyberFont.ttf'),
        'doctor': require('../../../assets/fontes/doctor.otf')
    })
    const [cep, setCep] = useState();
    const [logradouro, setLogradouro] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [uf, setUF] = useState();

    const buscaCEP = async () => {
        if (cep != null && cep != "") {

            await fetch('https://viacep.com.br/ws/' + cep + '/json/').then(resp => {

                return resp.json()
            }).then(data => {
                console.log(data);
                setCidade(data.localidade)
                setLogradouro(data.logradouro)
                setBairro(data.bairro)
                setUF(data.uf)
            })
        }

    }


    const [checked, setChecked] = useState('Male')
    const [date, setDate] = useState(new Date())
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const [showPicker, setShowPciker] = useState(false)
    const toogleDatePicker = () => {
        setShowPciker(!showPicker)

    }
    const onChange = ({ type }, selectedDate) => {
        if (type == 'set') {
            const currentDate = selectedDate
            setDate(currentDate)

            if (Platform.OS === "android") {
                toogleDatePicker();

            }
        } else {
            toogleDatePicker();
        }

    }
    const style = StyleSheet.create({
        img: {
            width: 300,
            height: 400,
            position: 'absolute',
            top: 65


        },
        newCitizen: {
            backgroundColor: '#B94432',
            width: "100%",
            height: '7.5%',
            paddingTop: 40,
            elevation: 50,
            opacity: 0.8,

        },
        input: {
            marginTop: 5,
            width: 300,
            borderRadius: 5,
            backgroundColor: '#C6BCB0'
        }
    })
    if (!fontsLoaded) {

        return null
    }

    return (


        <ScrollView contentContainerStyle={{flexGrow: 1,paddingBottom:50, backgroundColor:'#131927'}}>
            <View style={{ backgroundColor: "#131927", alignItems: 'center', position: 'relative' }}>

                <Image source={cyborg} style={style.img} />
                <View style={style.newCitizen}>

                    <Text style={{ fontFamily: 'doctor', color: "#2A2B2D", fontSize: 25, textAlign: 'center', opacity: 1 }}>New citizen</Text>
                    <Text style={{ color: "#2A2B2D", fontSize: 60, textAlign: 'center', opacity: 1, position: 'absolute', top: 10, left: 10 }}

                        onPress={() => navigation.navigate('Home')}

                    >{"<"}</Text>

                </View>

                <View style={{ marginTop: 350 }}>



                    <TextInput style={style.input}
                        label={'Citizen name'}
                        placeholder="..."


                    />
                    <TextInput style={style.input}
                        label={'Login'}
                        placeholder="..."

                    />
                    <TextInput style={style.input}

                        label={'Password'}
                        placeholder="..."

                    />
                    <TextInput style={style.input}

                        label={'E-mail'}
                        placeholder="..."

                    />
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        <View>
                            <TouchableOpacity onPress={() => setChecked('Male')}

                                activeOpacity={0.6}

                            >

                                <View style={{ flexDirection: 'row', textAlign: 'center', backgroundColor: '#C6BCB0', width: 150, marginTop: 4, borderRadius: 5, height: 45, alignItems: 'center' }}>
                                    <RadioButton
                                        value="Male"
                                        status={checked === 'Male' ? 'checked' : "unchecked"}

                                        color="black"
                                    />
                                    <Text style={{ color: 'black', fontSize: 17, paddingTop: 5, opacity: 0.6 }}>Male</Text>


                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setChecked('Female')}>

                                <View style={{ flexDirection: 'row', textAlign: 'center', backgroundColor: '#C6BCB0', width: 150, marginTop: 4, borderRadius: 5, height: 45, alignItems: 'center' }}>
                                    <RadioButton
                                        value="Female"
                                        status={checked === 'Female' ? 'checked' : "unchecked"}

                                        color="black" />
                                    <Text style={{ color: 'black', fontSize: 17, paddingTop: 5, opacity: 0.6 }}>Female</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'center', width: 150 }}>

                            <View style={{ flexDirection: 'row', width: 150, marginTop: 4, borderRadius: 5, height: 45, justifyContent: 'center' }}>

                                <Text style={{ color: 'white', fontSize: 17, paddingTop: 5, fontFamily: 'doctor', letterSpacing: 5 }}>birth{'\n'}DATE</Text>


                            </View>
                            <View style={{ flexDirection: 'row', textAlign: 'center', marginTop: 4, borderRadius: 5 }}>

                                <TouchableOpacity

                                    onPress={() => toogleDatePicker()}>

                                    <TextInput style={{ height: 45, borderRadius: 5, width: 145, backgroundColor: '#C6BCB0', fontSize: 20, textAlign: 'center' }}

                                        placeholder={formattedDate}
                                        editable={false}

                                    />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                    <Text style={{ color: 'white', fontSize: 20, margin: 10, fontFamily: 'doctor', letterSpacing: 5, textAlign: 'center' }}>ADDRESS</Text>

                    <TextInput style={style.input}

                        label={'Zip code'}
                        placeholder="..."
                        onChangeText={(text) => setCep(text)}
                        onBlur={buscaCEP}
                        keyboardType="numeric"


                    />
                    <View style={{ flexDirection: 'row', gap: 5, marginTop: 5 }}>

                        <TextInput style={{ width: 230, borderRadius: 5, backgroundColor: '#C6BCB0' }}

                            label='City'
                            value={cidade}
                            placeholder="..."
                            onChangeText={(text) => setCidade(text)}



                        />
                        <TextInput style={{ width: 65, borderRadius: 5, backgroundColor: '#C6BCB0' }}

                            label='UF'
                            value={uf}
                            placeholder="..."
                            onChangeText={(text) => setUF(text)}



                        />
                    </View>
                    <TextInput style={style.input}

                        label='Neighborhood'
                        value={bairro}
                        placeholder="..."
                        onChangeText={(text) => setBairro(text)}



                    />
                    <TextInput style={style.input}

                        label='Street'
                        value={logradouro}
                        placeholder="..."
                        onChangeText={(text) => setLogradouro(text)}



                    />




                    <TouchableOpacity style={{ backgroundColor: '#B94432', opacity: 0.8, borderRadius: 5, marginTop: 10, width: 300, height: 40, justifyContent: 'center' }} onPress={() => { navigation.navigate('telaInicial') }}>
                        <Text style={{ color: '#2A2B2D', fontFamily: 'doctor', fontSize: 25, textAlign: 'center', letterSpacing: 15 }}

                            onPress={() => navigation.navigate('Home')}

                        >Create</Text>

                    </TouchableOpacity>

                    {showPicker && (

                        <DateTimePicker
                            mode="date"
                            disabled={false}
                            value={date}
                            onChange={onChange}

                        />



                    )}

                </View>
            </View >
        </ScrollView>
       
        
    )
}
export default CadastroView;


// "devDependencies": {
//   "@babel/core": "^7.20.0"
// 