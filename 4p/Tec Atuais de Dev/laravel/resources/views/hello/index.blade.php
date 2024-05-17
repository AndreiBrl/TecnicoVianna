









<form action="{{route('users.store')}}" method="POST">
@csrf
<input name="nome" type="text" value="{{ old('nome') }}">
<input type="submit" value="Enviar">
</form>