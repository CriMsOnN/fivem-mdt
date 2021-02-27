import { reactive, toRefs } from 'vue';

const state = reactive({
  reports: [{
    id: '1',
    officer: 'Cr1MsOn',
    incident: 'test',
    date: new Date(),
    time: Date.now(),
    reported: 'Cr1MsOn',
    description: 'Hello World'
  },
    {
      id: '2',
      officer: 'Cr1MsOn',
      incident: 'test',
      date: new Date(),
      time: Date.now(),
      reported: 'Cr1MsOn',
      description: 'Hello World'
    },
    {
      id: '3',
      officer: 'Cr1MsOn',
      incident: 'test',
      date: new Date(),
      time: Date.now(),
      reported: 'Cr1MsOn',
      description: 'Hello World'
    }
  ],
  loading: true,
})


export default function useReports() {
  const fetchReports = () => {
    /*state.loading = true;
    setTimeout(() => {
      state.loading = false;
      return state.reports
    }, 2000)*/
    return state.reports
  };

  return {
    ...toRefs(state), fetchReports
  }
}
