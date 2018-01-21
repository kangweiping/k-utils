export const measureFunc = function (name, n, func) {
  console.time(name)
  for (let i = 0; i < n; i++) {
      func.apply(null, Array.prototype.slice.call(arguments, 3))
  }
  console.timeEnd(name)
}


// copy from vue
const perf = window.performance

export const mark = function (tag) {
  return perf.mark(tag)
}

export const measure = function (name, startTag, endTag) {
  perf.measure(name, startTag, endTag)
  perf.clearMarks(startTag)
  perf.clearMarks(endTag)
  perf.clearMeasures(name)
}