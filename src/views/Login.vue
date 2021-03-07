<template>
<div id="login-section" class="container p-4 shadow-lg p-3 mb-5 bg-body rounded mt-5">
   <form action="/Home">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>

  <button type="submit" class="btn btn-primary">Envoyer</button>
</form>
</div>
</template>

<style scoped>
#login-section{
    width: 30%;
}
</style>
