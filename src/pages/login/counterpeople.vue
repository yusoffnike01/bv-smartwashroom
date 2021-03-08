<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <q-card flat class="my-card q-ma-sm" square>
          <q-card-section>
            <div class="text-h6">The Total People Counter every on Toilet</div>
            <div class="text-subtitle2"></div>
          </q-card-section>

          <graphcounter :height="350" />
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat class="my-card q-ma-sm" square>
          <q-card-section>
            <div class="text-h6">
              The Overall People counter Toilet per Month
              {{ new Date().getFullYear() }}
            </div>
            <div class="text-subtitle2"></div>
          </q-card-section>
          <graphmonthcounter :height="350" />
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat class="my-card q-ma-sm" square>
          <q-card-section dark inset>
            <div class="text-h6">The List Door Devices</div>
            <div class="text-subtitle2">
              NOTE: Click on <b>View </b>

              <q-btn dense round flat color="green" icon="visibility"></q-btn>

              to go to its details page
            </div>
          </q-card-section>

          <div class="q-pa-md">
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
              table-style="height:200px"
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
                    v-if="isadmin"
                    @click="Currentupdate(props.row.location)"
                    icon="edit"
                  >
                    <q-dialog v-model="updatelocation">
                      <q-card style="width: 700px; max-width: 80vw">
                        <q-card-section>
                          <div class="text-h6">Update location</div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                          <q-input
                            outlined
                            ref="location"
                            v-model="location"
                            label="location"
                            outline
                            hint=""
                            :rules="[
                              (val) => !!val || 'Please update Your location',
                            ]"
                          />
                        </q-card-section>
  <q-card-actions
                          align="right"
                          class="bg-white text-teal"
                        >
                          <q-btn flat label="OK" @click="editRow(props.row.counter_id)"/>
                        </q-card-actions>
                      
                      </q-card>
                    </q-dialog>
                    <q-tooltip content-class="bg-blue" :offset="[10, 10]">
                      Click Now
                    </q-tooltip></q-btn
                  >

                  <q-btn
                    dense
                    round
                    flat
                    color="red"
                    v-if="isadmin"
                    @click="deleteRow(props.row.counter_id)"
                    icon="delete"
                  >
                    <q-tooltip content-class="bg-red" :offset="[10, 10]">
                      Click Now
                    </q-tooltip>
                  </q-btn>
                  <q-btn
                    dense
                    round
                    flat
                    color="green"
                    @click="details(props.row)"
                    icon="visibility"
                  >
                    <q-tooltip content-class="bg-green" :offset="[10, 10]">
                      Click Now
                    </q-tooltip>
                  </q-btn>
                </q-td>
              </template>

              <template v-slot:no-data="{}">
                <div class="full-width row flex-center text-blue q-gutter-sm">
                  <q-spinner color="primary" size="3em" />
                  <span> Loading.. </span>
                </div>
              </template>
            </q-table>
          </div>
        </q-card>
      </div>

      <div v-if="this.isadmin" class="col-12 col-md-6">
        <q-card flat class="my-card q-ma-sm" square>
          <q-card-section dark inset>
            <div class="text-h6">The Register Form Device's Door</div>
            <div class="text-subtitle2"></div>
            <div class="position" style="height: 312px; margin-top: 8%">
              <q-input
                ref="ID_Device"
                v-model="ID_Device"
                label="ID Device"
                placeholder=""
                hint=""
                :rules="[(val) => !!val || 'Please fill ID Device ']"
              />

              <q-input
                ref="location"
                v-model="location"
                label="Location"
                placeholder=""
                hint=""
                :rules="[(val) => !!val || 'Please fill Location ']"
              />

              <q-input
                ref="maxpeople"
                v-model="maxpeople"
                label="Max people count"
                placeholder=""
                hint=""
                :rules="[(val) => !!val || 'Please fill max people count']"
              />

              <div class="button">
                <div class="q-pa-md q-gutter-sm">
                  <q-btn
                    color="primary"
                    label="Register"
                    @click="register_counter"
                  />
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import graphcounter from "@/pages/login/graphcounter.vue";
import graphmonthcounter from "@/pages/login/graphmonthcounter.vue";
import { date } from "quasar";
export default {
  name: "counterpeople",
  components: {
    graphcounter,
    graphmonthcounter,
  },
  props: ["id"],
  data() {
    return {
      filter: "",
      loading: false,
      ID_Device: "",
      location: "",
      maxpeople: "",
      value: 61,
      isadmin: null,
      update: false,
      updatelocation: false,

      pagination: {
        sortBy: "name",
        descending: false,
        page: 1,
        rowsPerPage: 3,
        rowsNumber: 10,
      },

      //name every Column
      columns: [
        // { name: "No", align: "center", label: "No", field: "no" },
        {
          name: "ID_Device",
          align: "center",
          label: "ID Device",
          field: "ID_Device",
        },
        {
          name: "count",
          align: "center",
          label: "Count",
          field: "count",
        },

        {
          name: "updated_at",
          label: "Update At",
          field: "updated_at",
          format: (val) => `${date.formatDate(val, "DD-MMM-YYYY hh:m:A")}`,
        },
        { name: "Location", label: "Location", field: "location" },
        { name: "actions", label: "Actions", field: "actions" },
      ],
      data: [],

      original: [{}],
    };
  },
  //    created()
  //  {
  //    this.isadmin=this.$store.getters['auth/isadmin']
  //    console.log(this.isadmin)

  //  },

  mounted() {
    // condition detect role id
    if (localStorage.getItem("role_id") == 1) {
      this.isadmin = true;
    } else if (localStorage.getItem("role_id") == 2) {
      this.isadmin = false;
    }

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
        .dispatch("deviceammonia/perdevicecounter")
        .then((response) => {
          this.original = response.data.data;
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

    // register_ammonia() {
    //   let data = {
    //     iddevice: this.iddevice,
    //     location: this.location,
    //     maxpeople:this.maxpeople

    //   };

    //   this.$store
    //     .dispatch("deviceammonia/insertdeviceamonia", data)

    //     .then(() => {
    //       this.$q.notify({
    //         message: "Register Successful",
    //         color: "blue",
    //         icon: "check_circle",
    //         position: "top",
    //       });
    //     })
    //     // error
    //     .catch(() => {
    //       this.$q.notify({
    //         // error.response.data.error,
    //         message: "PLEASE INSERT API FIRST... THANK YOU",
    //         color: "negative",
    //         icon: "error",
    //         position: "top",
    //       });
    //     });
    //   console.log(data);
    // },

    editRow(counter_id) {
      this.$store
        .dispatch("deviceammonia/updatecounter", counter_id)
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
    deleteRow(counter_id) {
      this.$store
        .dispatch("deviceammonia/deletecounterdevice", counter_id)
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

    details(props) {
      //  this.$store.dispatch("deviceammonia/successdata", props).then(() => {});
      this.$router.push({
        name: "detailviewcounter",

        params: {
          id: props.counter_id,
        },
      });
    },
    register_counter() {
      const iddeviceSelector = this.$refs.ID_Device;
      const locationSelector = this.$refs.location;
      const maxpeopleSelector = this.$refs.maxpeople;
      iddeviceSelector.validate();
      locationSelector.validate();
      if (
        iddeviceSelector.hasError ||
        locationSelector.hasError ||
        maxpeopleSelector.hasError
      )
        return;
      else {
        let data = {
          ID_Device: this.ID_Device,
          location: this.location,
          maxpeople: this.maxpeople,
        };

        this.$store
          .dispatch("deviceammonia/insertdevicecounter", data)
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
      }
    },

    Currentupdate(location) {
      this.updatelocation = true;
      this.location = location;
    },
  },
};
</script>
