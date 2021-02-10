
<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <q-card flat bordered class="my-card q-ma-sm" square>
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
        <q-card flat bordered class="my-card q-ma-sm" square>
          <q-card-section>
            <div class="text-h6">Ammonia Per Device</div>
            <div class="text-subtitle2"></div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <ammoniadevice :height="350" />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat bordered class="my-card q-ma-sm" square>
          <q-card-section>
            <div class="text-h6">The list device Ammonia Sensor</div>
            <div class="text-subtitle2"  v-if="this.iscleaner" >
              Click Here to set level Ammonia
              <q-btn
                dense
                round
                flat
                color="blue"
                @click="update = true"
                icon="sensors"
                v-if="this.iscleaner"
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
                    v-if="this.isadmin"
                    dense
                    round
                    flat
                    color="blue"
                    @click="editRow(props.row.id)"
                    icon="edit"
                  ></q-btn>
                  <q-btn
                    v-if="created"
                    dense
                    round
                    flat
                    color="red"
                    @click="deleteRow(props.row.id)"
                    icon="delete"
                  ></q-btn>
                </q-td>
              </template>
              <template v-slot:no-data="{}">
                <div class="full-width row flex-center text-blue q-gutter-sm">
                   <q-spinner
        color="primary"
        size="3em"
      />

                  <span> Loading.. </span>
              
                </div>
              </template>
            </q-table>
          </div>
          <q-card-section> </q-card-section>
        </q-card>
      </div>

      <div v-if="this.iscleaner" class="col-12 col-md-6">
        <q-card
          flat
          bordered
          class="my-card q-ma-sm"
          square
          style="height: 445px"
        >
          <q-card-section>
            <div class="text-h6">The list device Ammonia Sensor</div>
            <div class="text-subtitle2"></div>
          </q-card-section>

          <q-separator dark inset />
          <div class="q-pa-md">Register Ammonia Sensor Device</div>
          <q-card-section>
            <q-input
              ref="iddevice"
              v-model="iddevice"
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
                />level
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
import ammoniadevice from "@/pages/login/ammoniadevice.vue";
// import { mapGetters } from "vuex";

export default {
  name: "graphammonia",
  components: {
    ammonia,
    ammoniadevice,
  },

  data() {
    return {
      filter: "",
      loading: false,
      iddevice: "",
      location: "",
      level: "",
      value: 61,
      iscleaner:null,
      

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
        { name: "User", align: "center", label: "No", field: "userId" },
        {
          name: "id",
          align: "center",
          label: "ID Device",
          field: "id",
        },
        {
          name: "title",
          align: "center",
          label: "Ammonia Level (Mg)",
          field: "title",
        },

        { name: "completed", label: "Update At", field: "completed" },
        { name: "location", label: "Location", field: "Location" },

        { name: "actions", label: "Actions", field: "Action" },
      ],
      data: [],

      original: [{}],
    };
  },

beforeCreate()
{

this.iscleaner=this.$store.getters['auth/isadmin']


},
  // computed: {
  //   ...mapGetters("auth", ["isadmin"]),
  // },

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
          if (localStorage.getItem('role_id')==1) {
            (this.visibleColumns = [
              "User",
              "id",
              "title",
              "completed",
              "location",
            ]),
              
            this.$q.notify({
              message: "Please Clean Up Device 1",
              color: "blue",
              avatar:
                "https://media.istockphoto.com/vectors/cleaning-service-clipart-cartoon-mascot-vector-id1141622428?k=6&m=1141622428&s=612x612&w=0&h=vsheP6t13AZfp3wJNOzD2jpLmonW0ne-fG-1APoo7Vk=",
              position: "top",
            });

            
          } 

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
// register device ammonia 
    register_ammonia() {
      const iddeviceSelector = this.$refs.iddevice;
      const locationSelector = this.$refs.location;
      iddeviceSelector.validate();
      locationSelector.validate();
      if (iddeviceSelector.hasError || locationSelector.hasError) return;
      else {
        let data = {
          iddevice: this.iddevice,
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
              // error.response.data.error,
              message: "PLEASE INSERT API FIRST... THANK YOU",
              color: "negative",
              icon: "error",
              position: "top",
            });
          });
       
      }
    },

// method edit row table ammonia
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

// method delete  row table ammonia

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

    setlevel() {
      let data = {
        level: this.level,
      };

      console.log(data);
      this.update = false;
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