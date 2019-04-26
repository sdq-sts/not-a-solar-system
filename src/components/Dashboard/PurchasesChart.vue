<template>
  <v-card
    :class="{ 'pa-3': screenSize.xlOnly, 'pa-1': screenSize.lgAndDown }"
    color="accent"
  >
    <apexchart
      width="100%"
      :height="screenSize.lgAndDown ? 232 : 290"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import currencyBRL from '@/filters/currencyBRL'
import isEqual from 'lodash/isEqual'

export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    options: {
      xaxis: { categories: [] },
      yaxis: {
        labels: { formatter: (value) => currencyBRL(value) }
      },
      title: {
        text: 'HISTÓRICO',
        align: 'center',
        offsetY: 20,
        style: { fontSize: '12px' }
      },
      legend: {
        show: true,
        offsetY: -14,
        markers: { width: 8, height: 8 }
      },
      tooltip: { theme: 'light' },
      chart: {
        fontFamily: 'Work Sans, sans-serif',
        foreColor: '#373d3f',
        toolbar: { show: false },
        animations: {
          enabled: true,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 600
          }
        }
      },
      stroke: { width: 2, curve: 'smooth' },
      markers: {
        size: 0,
        strokeWidth: 0,
        fillOpacity: 1,
        hover: { sizeOffset: 3 }
      }
    },
    series: [
      { name: 'COMPRAS', data: [] },
      { name: 'VENDAS', data: [] }
    ]
  }),

  watch: {
    dark: {
      handler: 'setThemeColor',
      immediate: true
    },
    mainChartData: {
      handler: 'setChartData',
      immediate: true
    }
  },

  computed: {
    ...mapGetters('dashboard', [ 'mainChartData' ]),
    ...mapGetters('dashboard', [ 'period' ]),
    screenSize () {
      return this.$vuetify.breakpoint
    }
  },

  methods: {
    async setChartData () {
      const xaxis = { xaxis: { categories: this.period } }

      if (this.mainChartData && !(isEqual(this.mainChartData, this.series))) {
        this.options = { ...this.options, ...xaxis }
        this.series = this.mainChartData
      }
    },
    darkThemeOptions () {
      const optionsChart = this.options.chart

      return {
        chart: { ...optionsChart, foreColor: '#fff', toolbar: { show: false } },
        stroke: { width: 2, curve: 'smooth' },
        tooltip: { theme: 'dark' },
        markers: {
          size: 3,
          strokeWidth: 0,
          fillOpacity: 1,
          hover: { sizeOffset: 2 }
        }
      }
    },
    lightThemeOptions () {
      const optionsChart = this.options.chart

      return {
        chart: { ...optionsChart, foreColor: '#373d3f', toolbar: { show: false } },
        stroke: { width: 2, curve: 'smooth' },
        tooltip: { theme: 'light' },
        markers: {
          size: 3,
          strokeWidth: 0,
          fillOpacity: 1,
          hover: { sizeOffset: 2 }
        }
      }
    },
    setThemeColor (value) {
      if (value) {
        this.options = { ...this.options, ...this.darkThemeOptions() }
      } else {
        this.options = { ...this.options, ...this.lightThemeOptions() }
      }
    }
  }
}
</script>

<style>
.apexcharts-legend-text {
  font-size: 11px!important;
}
</style>
