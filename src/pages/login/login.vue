<template>
  <!-- page for login admin and cleaner -->
  <q-layout class="background">
    <q-page class="flex flex-center">
      <q-card style="width: 350px">
        <q-card-section align="center">
          <q-img
            :src="require('@/image/klcc.png')"
            spinner-color="black"
            style="width: 200px"
          />
        </q-card-section>

        <q-bar style="bg-white">
          <!-- <q-icon name="eva-save"> -->

          <q-card-section align="center">
            <div class="position">Petronas Twin Towers Smart Washroom</div>
          </q-card-section>

          <q-space />

          <q-btn
            dense
            flat
            icon="eva-close-outline"
            @click="showDialog = !showDialog"
          >
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <q-input
            outlined
            ref="email"
            v-model="email"
            label="email"
            placeholder="Enter your Email"
            hint=""
            :rules="[
              (val) => !!val || 'Please Enter Your Email',
              (val) => this.validationEmail(val) || 'Error Format',
            ]"
          />
        </q-card-section>

        <q-card-section>
          <q-input
            outlined
            ref="password"
            v-model="password"
            filled
            type="password"
            label="password"
            placeholder="Enter your Password"
            hint=""
            :rules="[(val) => !!val || 'Please Enter Your Password']"
          />
        </q-card-section>

        <q-card-section>
          <q-btn
            push
            color="primary"
            label="login"
            class="full-width"
            size="lg"
            @click="login"
          />
        </q-card-section>
      </q-card>
    </q-page>
  </q-layout>
  <!-- <router-view/>          -->
</template>

<script>
import isEmail from "validator/lib/isEmail";

export default {
  name: "login", //pagename
// detect token in localstorage

  beforeRouteEnter(to, from, next) {
    // if(localstroage.getitem('islogger')==true)
    if (localStorage.getItem("token")) {
      next("/");
      return;
    } else {
      next();
    }
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    // verify email first
    validationEmail(value) {
      return isEmail(value);
    },
// detect email or password if correct got next page.. if not, back page
    login() {
      const emailSelector = this.$refs.email;
      const passwordSelector = this.$refs.password;
      emailSelector.validate();
      passwordSelector.validate();
      if (emailSelector.hasError || passwordSelector.hasError) return;
      else {
        let data = {
          admin: {
            email: this.email,
            password: this.password,
          },
        };

        this.$store
          .dispatch("auth/login", data)

          .then(() => {
            this.$q.notify({
              message: "Login Successful",
              color: "blue",
              icon: "check_circle",
              position: "top",
            });

            this.$router.push("/usermanagement");
          })

          .catch((error) => {
            this.$q.notify({
              message: error.response.data.error,
              color: "negative",
              icon: "error",
              position: "top",
            });
          });
      }
    },
  },
};
</script>
<style scoped>
.position {
  margin-left: 3%;

  width: 120%;
}

.background
{
 background-color: #F1F5F7;
}
</style>