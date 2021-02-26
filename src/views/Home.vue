<template>
  <div class="m-w-full">
    <div class="m-w-full flex items-center justify-end mr-5 mt-5 text-white text-4xl">
      <font-awesome-icon :icon="['fa', 'plus-circle']"/>
    </div>
    <div class="m-w-full flex items-center justify-center items-center">
      <input type="search" class="p-4 rounded text-center text-black outline-none" v-model="reportValue" placeholder="Search for reports"/>
    </div>
    <div class="m-w-full flex items-center justify-between flex-col pt-5">
    <transition-group name="fade">
      <div
        v-for="report in filterReports"
        class="box-content h-52 w-5/6 rounded p-4 border-4 border-blue-500 shadow-2xl mt-5 bg-gray-800"
        :key="report.id"
      >
        <div class="flex flex-row flex-wrap">
          <div class="flex flex-col max-w-sm justify-start align-start p-4">
            <label for="officer" class="flex justify-center align-center text-white 2xl:font-bold">Officer</label>
            <input type="text" id="officer" disabled class="p-4 rounded text-center text-black outline-none" :value="report.officer"/>
          </div>
          <div class="flex flex-col max-w-sm justify-start align-start p-4">
            <label for="reported" class="flex justify-center align-center text-white 2xl:font-bold">Reported</label>
            <input type="text" id="reported" disabled class="p-4 rounded text-center text-black outline-none" :value="report.reported"/>
          </div>
          <div class="flex flex-col max-w-sm justify-start align-start p-4">
            <label for="date" class="flex justify-center align-center text-white 2xl:font-bold">Date</label>
            <input type="text" id="date" disabled class="p-4 rounded text-center text-black outline-none" :value="format(new Date(report.date), 'MMM do yyyy')"/>
          </div>
          <div class="flex flex-col max-w-sm justify-start align-start p-4">
            <label for="time" class="flex justify-center align-center text-white 2xl:font-bold">Time</label>
            <input type="text" id="time" disabled class="p-4 rounded text-center text-black outline-none" :value="format(new Date(report.time), 'HH:mm:ss')"/>
          </div>
          <div class="flex flex-col max-w-full justify-start align-start p-4">
            <label for="incident" class="flex justify-center align-center text-white 2xl:font-bold">Time</label>
            <textarea id="incident" class="w-80 h-14" :value="report.incident"/>
          </div>
        </div>
      </div>
    </transition-group>
    </div>
  </div>
</template>

<script>

import useReports from "@/hooks/useReports";
import {ref, computed} from "vue";
import { format } from "date-fns";

export default {
  name: 'Home',
  setup() {
    const { reports, loading, fetchReports } = useReports();
    const reportValue = ref('');

    const filterReports = computed(() => {
      console.log(fetchReports())
      return fetchReports().filter((e) => {
        return reportValue.value.toLowerCase().includes(e.officer.toLowerCase());
      })
    })


    return {
      reports, loading, reportValue, filterReports, format
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
