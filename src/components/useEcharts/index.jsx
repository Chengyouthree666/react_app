// // import * as echarts from 'echarts'
// // import 'echarts-liquidfill'
// import { useState } from 'react'
// import React, {useState, useEffect, createRef} from 'react

// export default function UseEcharts(props = {}) {
//   const { options = {}, renderFun } = props

//   // const theme = ref({ darkMode: 'dark' });
//   const [theme, setTheme] = useState({ darkMode: 'dark' })

//   const domRef = ref(null);
//   const domRef =

//   const initialSize = { width: 0, height: 0 };
//   const { width, height } = useElementSize(domRef, initialSize);

//   let chart = null;

//   function canRender() {
//     return initialSize.width > 0 && initialSize.height > 0;
//   }

//   function isRendered() {
//     return Boolean(domRef.value && chart);
//   }

//   function update(updateOptions) {
//     if (isRendered()) {
//       chart.setOption(
//         { ...updateOptions, backgroundColor: 'transparent' },
//         {
//           replaceMerge: ['xAxis', 'yAxis', 'series'],
//         },
//       );
//     }
//   }

//   async function render() {
//     if (domRef.value) {
//       const chartTheme = theme.darkMode ? 'dark' : 'light';
//       await nextTick();
//       chart = echarts.init(domRef.value, chartTheme);
//       if (renderFun) {
//         renderFun(chart);
//       }
//       update(options.value);
//     }
//   }

//   function resize() {
//     chart?.resize();
//   }

//   function destroy() {
//     chart?.dispose();
//   }

//   function updateTheme() {
//     destroy();
//     render();
//   }

//   const stopSizeWatch = watch([width, height], ([newWidth, newHeight]) => {
//     initialSize.width = newWidth;
//     initialSize.height = newHeight;
//     if (canRender()) {
//       if (!isRendered()) {
//         render();
//       } else {
//         resize();
//       }
//     }
//   });

//   const stopOptionWatch = watch(options, (newValue) => {
//     update(newValue);
//   });

//   const stopDarkModeWatch = watch(
//     () => theme.darkMode,
//     () => {
//       updateTheme();
//     },
//   );

//   // onUnmounted(() => {
//   //   destroy();
//   //   stopSizeWatch();
//   //   stopOptionWatch();
//   //   stopDarkModeWatch();
//   // });

//   // return {
//   //   domRef,
//   // };
// }
