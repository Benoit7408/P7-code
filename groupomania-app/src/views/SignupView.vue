<template>
  <div>
    <form class="form-signin" >
     
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputName" class="sr-only">Nom</label>
      <input
        type="text"
        id="name"
        class="form-control"
        placeholder="Nom"
        required
        autofocus
      />
      <label for="inputLastName" class="sr-only">Prenom</label>
      <input
        type="text"
        id="lastName"
        class="form-control"
        placeholder="Prenom"
        required
        autofocus
      />
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      />
      <label for="inputPassword" class="sr-only">Check Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
      
    </form>
  </div>
  
</template>

<script>
export default {
    name: 'signup-form',
}

</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
 
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.sr-only {
  width: 100%;
  display: inline-block;
}

</style>