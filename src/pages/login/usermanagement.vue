<template>
  <div class="q-pa-md">
    <!-- component to register cleaner -->
    <div class=" row justify-center">
      <div  class="col-12 col-md-6" v-if="this.isadmin">
        <q-card square flat bordered class="my-card q-ma-sm">
          <q-card-section>
            <h5>Register Form Cleaner</h5>

            <q-input
              ref="username"
              v-model="username"
              label="username"
              placeholder=""
              hint=""
              :rules="[(val) => !!val || 'Please fill username cleaner ']"
            />

            <q-input
              ref="name"
              v-model="name"
              label="name"
              placeholder=""
              hint=""
              :rules="[(val) => !!val || 'Please fill username cleaner ']"
            />

            <q-input
              ref="email"
              v-model="email"
              label="email"
              placeholder="Enter cleaner's Email"
              hint=""
              :rules="[
                (val) => !!val || 'Please Enter Your Email',
                (val) => this.validationEmail(val) || 'Error Format',
              ]"
            />

            <q-input
              ref="password"
              v-model="password"
              label="password"
              placeholder="Enter your Password"
              hint=""
              :rules="[(val) => !!val || 'Please Enter Your Password']"
            />
          </q-card-section>

          <q-card-section>
            <div class="q-pa-md q-gutter-sm">
              <q-btn color="primary" label="Register" @click="register" />
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div  class="col-12 col-md-6" v-if="this.isadmin">
        <q-card square flat bordered class="my-card q-mt-sm">
          <q-card-section>
            <q-table
              title="Table"
              :data="data"
              :columns="columns"
              row-key="id"
              :pagination.sync="pagination"
              :loading="loading"
              :filter="filter"
              @request="onRequest"
              binary-state-sort
              table-style="height:402px"
            >
              <template v-slot:top-right>
                <q-input
                  borderless
                  dense
                  debounce="300"
                  v-model="filter"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </template>
              <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                  <q-btn
                    dense
                    round
                    flat
                    color="blue"
                    @click="editRow(props.row.id)"
                    icon="edit"
                  ></q-btn>
                  <q-btn
                    dense
                    round
                    flat
                    color="red"
                    @click="deleteRow(props.row.id)"
                    icon="delete"
                  ></q-btn>
                </q-td>
              </template>

              <center>
                <div class="text-h6">
                
                </div>
              </center>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row" >
      <div class="col-12 col-md-12">
        <q-card-section align="center">
          <q-img
            class="flex-self-end profile-photo circle-border dangling-bottom"
            :src="require('@/image/profile.png')"
            spinner-color="black"
            style="width: 200px"
          />
        </q-card-section>

        <q-card flat class="my-card q-ma-sm" square>
          <q-card-section dark inset>
            <div class="text-h4" align="center">Profile Cleaner1</div>
            <div class="text-subtitle2"></div>
            <div class="d-flex flex-justify-center mb-5" border>
              <table
                class="positionadmin"
                align="center"
                outline
                style="margin-top:2%"
              >
                <tr class="text-h6">
                  <td>ID:</td>
                  <td>S4675</td>
                </tr>
                <tr class="text-h6">
                  <td>Name:</td>
                  <td>Tengku Yusoff Bin Tengku Ibrahim Shukrillah</td>
                </tr>
                <tr class="text-h6">
                  <td>Email:</td>
                  <td>yusoff@gmail.com</td>
                </tr>
                <tr></tr>

                <tr class="text-h6">
                  <td>Last Login :</td>
                  <td>-----</td>
                </tr>
                <tr>
                  <td>
                    <div class="q-pa-md q-gutter-sm">
                      <q-btn
                        label="Update"
                        color="primary"
                        @click="update = true"
                      />

                      <q-dialog v-model="update">
                        <q-card style="width: 700px; max-width: 80vw">
                          <q-card-section>
                            <div class="text-h6">Update Password</div>
                          </q-card-section>

                          <q-card-section class="q-pt-none">
                            <q-input
                              outlined
                              ref="password"
                              v-model="password"
                              label="password"
                              placeholder="Enter your  Password"
                              hint=""
                              :rules="[
                                (val) => !!val || 'Please Enter Your Password',
                              ]"
                            />
                          </q-card-section>

                          <q-card-section>
                            <q-input
                              outlined
                              ref="confirmationpass"
                              v-model="confirmationpass"
                              label="password"
                              placeholder="Enter your Confirmation Password"
                              hint=""
                              :rules="[
                                (val) => !!val || 'Please Enter Your Password',
                              ]"
                            />
                          </q-card-section>

                          <q-card-actions
                            align="right"
                            class="bg-white text-teal"
                          >
                            <q-btn flat label="OK" @click="updatepassword" />
                          </q-card-actions>
                        </q-card>
                      </q-dialog>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row" v-if="this.isadmin">
      <div class="col-16 col-md-6">
        <q-card flat bordered class="my-card q-ma-sm" square>
          <q-card-section dark inset>
            <div class="text-h6">Profile Admin</div>
            <div class="text-subtitle2"></div>

            <table class="positionadmin">
              <tr>
                <td>ID:</td>
                <td>S4675</td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>Aiman Hakim</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>yusoff@gmail.com</td>
              </tr>
              <tr></tr>

              <tr>
                <td>Last Login :</td>
                <td>-----</td>
              </tr>
              <tr>
                <td>
                  <div class="q-pa-md q-gutter-sm">
                    <q-btn
                      label="Update"
                      color="primary"
                      @click="update = true"
                    />

                    <q-dialog v-model="update">
                      <q-card style="width: 700px; max-width: 80vw">
                        <q-card-section>
                          <div class="text-h6">Update Password</div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                          <q-input
                            outlined
                            ref="password"
                            v-model="password"
                            label="password"
                            placeholder="Enter your  Password"
                            hint=""
                            :rules="[
                              (val) => !!val || 'Please Enter Your Password',
                            ]"
                          />
                        </q-card-section>

                        <q-card-section>
                          <q-input
                            outlined
                            ref="confirmationpass"
                            v-model="confirmationpass"
                            label="password"
                            placeholder="Enter your Confirmation Password"
                            hint=""
                            :rules="[
                              (val) => !!val || 'Please Enter Your Password',
                            ]"
                          />
                        </q-card-section>

                        <q-card-actions
                          align="right"
                          class="bg-white text-teal"
                        >
                          <q-btn flat label="OK" v-close-popup />
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
                  </div>
                </td>
              </tr>
            </table>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import isEmail from "validator/lib/isEmail";
import { mapGetters } from "vuex";
export default {
  name: "usermanagement",
  data() {
    return {
      filter: "",
      loading: false,
      username: "",
      name: "",
      email: "",
      password: "",
      confirmationpass: "",
      update: false,

      pagination: {
        sortBy: "name",
        descending: false,
        page: 1,
        rowsPerPage: 3,
        rowsNumber: 10,
      },

      //name every Column
      columns: [
        { name: "User", align: "center", label: "No", field: "userId" },
        {
          name: "id",
          align: "center",
          label: "Username",
          field: "id",
        },
        { name: "title", align: "center", label: "Name", field: "title" },

        { name: "completed", label: "Email", field: "completed" },
        { name: "actions", label: "Actions", field: "Action" },
      ],
      data: [],

      original: [{}],
    };
  },

  computed: {
    ...mapGetters("auth", ["isadmin"]),
  },
  mounted() {
    // get initial data from server (1st page)
    this.onRequest({
      pagination: this.pagination,
      filter: undefined,
    });
  },

  methods: {
    onRequest(props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination;
      const filter = props.filter;

      this.loading = true;
      this.$store
        .dispatch("cleaner/display")
        .then((response) => {
          this.original = response.data;

          setTimeout(() => {
            // update rowsCount with appropriate value
            this.pagination.rowsNumber = this.getRowsNumberCount(filter);

            // get all rows if "All" (0) is selected
            const fetchCount =
              rowsPerPage === 0 ? this.pagination.rowsNumber : rowsPerPage;

            // calculate starting row of data
            const startRow = (page - 1) * rowsPerPage;

            // fetch data from "server"
            const returnedData = this.fetchFromServer(
              startRow,
              fetchCount,
              filter,
              sortBy,
              descending
            );

            // clear out existing data and add new
            this.data.splice(0, this.data.length, ...returnedData);

            // don't forget to update local pagination object
            this.pagination.page = page;
            this.pagination.rowsPerPage = rowsPerPage;
            this.pagination.sortBy = sortBy;
            this.pagination.descending = descending;

            // ...and turn of loading indicator
            this.loading = false;
          }, 1500);
        })
        .catch((error) => {
          this.$q.notify({
            message: error.response.data.error,
            color: "negative",
            icon: "error",
            position: "top",
          });
        });

      // emulate server
    },

    fetchFromServer(startRow, count, filter, sortBy, descending) {
      const data = filter
        ? this.original.filter((row) => row.Name.includes(filter))
        : this.original.slice();

      // handle sortBy
      if (sortBy) {
        const sortFn =
          sortBy === "desc"
            ? descending
              ? (a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
              : (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            : descending
            ? (a, b) => parseFloat(b[sortBy]) - parseFloat(a[sortBy])
            : (a, b) => parseFloat(a[sortBy]) - parseFloat(b[sortBy]);
        data.sort(sortFn);
      }

      return data.slice(startRow, startRow + count);
    },

    getRowsNumberCount(filter) {
      if (!filter) {
        return this.original.length;
      }
      let count = 0;
      this.original.forEach((treat) => {
        if (treat.Name.includes(filter)) {
          ++count;
        }
      });
      return count;
    },
    validationEmail(value) {
      return isEmail(value);
    },
    register() {
      const usernameSelector = this.$refs.username;
      const nameSelector = this.$refs.name;
      const emailSelector = this.$refs.email;
      const passwordSelector = this.$refs.password;
      usernameSelector.validate();
      nameSelector.validate();
      emailSelector.validate();
      passwordSelector.validate();

      if (
        usernameSelector.hasError ||
        nameSelector.hasError ||
        emailSelector.hasError ||
        passwordSelector.hasError
      )
        return;
      else {
        let data = {
          username: this.username,
          name: this.name,
          email: this.email,
          password: this.password,
        };

        this.$store
          .dispatch("cleaner/insertdata", data)

          .then(() => {
            this.$q.notify({
              message: "Register Successful",
              color: "blue",
              icon: "check_circle",
              position: "top",
            });
          })

          .catch((error) => {
            this.$q.notify({
              // error.response.data.error,
              message: error.response.data.error,
              color: "negative",
              icon: "error",
              position: "top",
            });
          });
      }
    },

    editRow(props) {
      this.$store
        .dispatch("cleaner/updatebyid", props)
        .then(() => {
          this.$q.notify({
            message: "Register Successful",
            color: "blue",
            icon: "check_circle",
            position: "top",
          });
        })
        // error
        .catch(() => {
          this.$q.notify({
            // error.response.data.error,
            message: "PLEASE INSERT API FIRST... THANK YOU",
            color: "negative",
            icon: "error",
            position: "top",
          });
        });
    },
    // method delete row id
    deleteRow(id) {
      this.$store
        .dispatch("cleaner/deletebyid", id)
        .then(() => {
          this.$q.notify({
            message: "Register Successful",
            color: "blue",
            icon: "check_circle",
            position: "top",
          });
        })
        // error
        .catch(() => {
          this.$q.notify({
            // error.response.data.error,
            message: "PLEASE INSERT API FIRST... THANK YOU",
            color: "negative",
            icon: "error",
            position: "top",
          });
        });
    },

// update pasword user
    updatepassword() {
      this.update = false;
    },
  },
};
</script>
