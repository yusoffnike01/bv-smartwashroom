
<template>
  <div class="q-pa-md" style="background-color: white">
    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <q-card flat class="my-card q-ma-sm" square>
          <q-card-section>
            <div class="text-h6">The Total Ammonia Device on Toilet</div>
            <div class="text-subtitle2"></div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <ammonia :height="350" />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat class="my-card q-ma-sm" square>
          <q-card-section>
            <div class="text-h6">Ammonia Per Device</div>
            <div class="text-subtitle2"></div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <graphamonialine :height="350" />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat class="my-card q-ma-sm" square>
          <q-card-section>
            <div class="text-h6">The list device Ammonia Sensor</div>
            <div class="text-subtitle2" v-if="this.isadmin">
              Click Here to set level Ammonia
              <q-btn
                dense
                round
                flat
                color="blue"
                @click="update = true"
                icon="sensors"
                v-if="this.isadmin"
              ></q-btn>

              <q-dialog v-model="update">
                <q-card style="width: 700px; max-width: 80vw">
                  <q-card-section>
                    <div class="text-h6">Set Level Ammonia Gas</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <q-input
                      outlined
                      ref="level"
                      v-model="level"
                      label="level"
                      placeholder="Set Level Ammonia Gas"
                      hint=""
                      :rules="[(val) => !!val || 'Please Fill level Ammonia']"
                    />
                  </q-card-section>

                  <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" @click="setlevel" />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>
          </q-card-section>

          <q-separator dark inset />
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
              :visible-columns="visibleColumns"
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
                          <q-btn flat label="OK" @click="editRow(props.row.ammoni_id)"/>
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
                  </q-btn>
                  <q-btn
                    dense
                    round
                    flat
                    color="red"
                    @click="deleteRow(props.row.ammoni_id)"
                    icon="delete"
                  ></q-btn>
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
          <q-card-section> </q-card-section>
        </q-card>
        <br /><br />
      </div>

      <div v-if="this.isadmin" class="col-12 col-md-6">
        <q-card flat class="my-card q-ma-sm" square style="height: 445px">
          <q-card-section>
            <div class="text-h6">Register Ammonia Sensor Device</div>
            <div class="text-subtitle2"></div>
          </q-card-section>

          <q-separator dark inset />
          <div class="q-pa-md"></div>
          <q-card-section>
            <q-input
              ref="ID_Device"
              v-model="ID_Device"
              label="ID Device"
              placeholder=""
              hint=""
              :rules="[(val) => !!val || 'Please fill ID device ']"
            />

            <q-input
              ref="location"
              v-model="location"
              label="location"
              placeholder=""
              hint=""
              :rules="[(val) => !!val || 'Please fill location ']"
            />

            <div class="button">
              <div class="q-pa-md q-gutter-sm">
                <q-btn
                  color="primary"
                  label="Register"
                  @click="register_ammonia"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>




<script>
import ammonia from "@/pages/login/ammonia.vue";
// import ammoniadevice from "@/pages/login/ammoniadevice.vue";
import graphamonialine from "@/pages/login/graphamonialine.vue";
// import { mapGetters } from "vuex";
import { date } from "quasar";

export default {
  name: "graphammonia",
  components: {
    ammonia,
    // ammoniadevice,
    graphamonialine,
  },

  data() {
    return {
      filter: "",
      loading: false,
      ID_Device: "",
      location: "",
      level: "",
      value: 61,
      isadmin: null,

      updatelocation: false,
      update: false,

      visibleColumns: [],

      pagination: {
        sortBy: "name",
        descending: false,
        page: 1,
        rowsPerPage: 3,
        rowsNumber: 10,
      },

      //name every Column

      columns: [
        // { name: "No", align: "center", label: "No", field: "No" },
        {
          name: "ID_Device",
          align: "center",
          label: "ID_Device",
          field: "ID_Device",
        },
        {
          name: "level",
          align: "center",
          label: "Ammonia Level (Mg)",
          field: "level",
        },

        {
          name: "updated_at",
          label: "Update At",
          field: "updated_at",
          format: (val) => `${date.formatDate(val, "DD-MMM-YYYY hh:m:A")}`,
        },
        { name: "location", label: "Location", field: "location" },

        { name: "actions", label: "Actions", field: "actions" },
      ],
      data: [],

      original: [{}],
    };
  },

  // created()
  // {

  // this.isadmin=this.$store.getters['auth/isadmin']

  // },
  // computed: {
  //   ...mapGetters("auth", ["isadmin"]),
  // },

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
        .dispatch("cleaner/display")
        .then((response) => {
          if (localStorage.getItem("role_id") == 1) {
            (this.visibleColumns = [
              "No",
              "ID_Device",
              "level",
              "updated_at",
              "location",
              "actions",
            ]),
              console.log;
          }

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
    // register device ammonia
    register_ammonia() {
      const ID_DeviceSelector = this.$refs.ID_Device;
      const locationSelector = this.$refs.location;
      ID_DeviceSelector.validate();
      locationSelector.validate();
      if (ID_DeviceSelector.hasError || locationSelector.hasError) return;
      else {
        let data = {
          ID_Device: this.ID_Device,
          location: this.location,
        };

        this.$store
          .dispatch("deviceammonia/insertdeviceamonia", data)

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
              message: "PLEASE INSERT API FIRST... THANK YOU",
              color: "negative",
              icon: "error",
              position: "top",
            });
          });
      }
    },

    // method edit row table ammonia
    editRow(ammoni_id) {
      this.$store
        .dispatch("cleaner/updatebyid", ammoni_id)
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

    // method delete  row table ammonia

    deleteRow(ammoni_id) {
      this.$store
        .dispatch("deviceammonia/deletebyammoniid", ammoni_id)
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
            message: "Please insert API first",
            color: "negative",
            icon: "error",
            position: "top",
          });
        });
    },

    setlevel() {
      let data = {
        level: this.level,
      };

      console.log(data);
      this.update = false;
    },

    // update location device

    Currentupdate(location) {
      this.updatelocation = true;
      this.location = location;
    },
  },
};
</script>
<style scoped>
.button {
  position: absolute;
  right: 0;
}
</style>