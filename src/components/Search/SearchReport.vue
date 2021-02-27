<template>
  <div class="flex justify-center align-center pt-5" v-if="report">
    <form id="form" @submit.prevent="handleChanges" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <br>
      <h1 class="text-gray-700 font-bold mb-2 text-xl text-center">Report for {{report[0].reported}}</h1>
      <br>
      <div class="mb-4">
        <label class="text-gray-700 text-sm font-bold mb-2" for="name">Officer</label>
        <input type="text" disabled :value="report[0].officer" id="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div class="mb-4">
        <label class="text-gray-700 text-sm font-bold mb-2" for="reported">Reported</label>
        <input type="text" disabled :value="report[0].reported" id="reported" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div class="mb-4">
        <label class="text-gray-700 text-sm font-bold mb-2" for="date">Date</label>
        <input type="text" disabled :value="format(new Date(report[0].date), 'MMM do yyyy')" id="date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div class="mb-4">
        <label class="text-gray-700 text-sm font-bold mb-2" for="time">Time</label>
        <input type="text" disabled :value="format(new Date(report[0].time), 'HH:mm:ss')" id="time" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div class="mb-4">
        <label class="text-gray-700 text-sm font-bold mb-2" for="incident">Incident</label>
        <input type="text" disabled :value="report[0].incident" id="incident" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div class="mb-4">
        <label class="text-gray-700 text-sm font-bold mb-2" for="description">Description</label>
        <textarea  v-model="changeDescription" id="description" :placeholder="report[0].description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

      </div>
      <div class="mb-4 flex justify-center align-center">
        <button class="shadow border rounded bg-blue-700 text-white p-5">Save changes</button>
      </div>
    </form>
  </div>
</template>

<script>
import useReports from "@/hooks/useReports";
import {useRouter, useRoute} from "vue-router";
import {computed, ref, onBeforeMount} from "vue";
import { format } from "date-fns";
export default {
  setup() {
    const { reports, loading, fetchReports } = useReports();
    const report = ref([]);
    const route = useRoute();
    const router = useRouter();
    const changeDescription = ref('');

    onBeforeMount(() => {
      const fetch = fetchReports().filter(e => {
        if (e.id === route.params.id) {
          changeDescription.value = e.description
          report.value.push(e);
        }
      })
    })

    const handleChanges = () => {
      const updatedDescription = changeDescription.value;
      fetchReports().filter(e => {
        if (e.id === route.params.id) {
          e.description = updatedDescription
          router.push('/')
        }
      })
    }

    return {
      report,
      format,
      changeDescription,
      handleChanges
    }
  }

}
</script>
