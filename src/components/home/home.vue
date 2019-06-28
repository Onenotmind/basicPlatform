<template>
  <div
    id="home"
    :style="{ 'background': true ? 'red' : 'blue'}">
    {{ name }}
  </div>
</template>
<script>

export default {
  name: 'Home',
  data () {
    return {
      name: 'home'
    }
  },
  mounted () {
    // setTimeout(() => {
    //   let jscript = 'window.onload=function(){document.getElementById("home").innerHTML="change"}'
    //   let tmpHTML = document.getElementById('mainContent').innerHTML
    //   this.geneHTML('测试', tmpHTML, jscript)
    // }, 3000)
  },
  methods: {
    geneHTML (title, code, js_script) {
      let innerHTML = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title></head><body>${code}</body><script type="text/javascript">${js_script}<\/script></html>`
      this.export_raw('test.html', innerHTML)
    },
    export_raw(filename, data) {
      var name = filename
      var urlObject = window.URL || window.webkitURL || window
      var export_blob = new Blob([data])
      var save_link = document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        "a"
      )
      save_link.href = urlObject.createObjectURL(export_blob)
      save_link.download = name;
      var ev = document.createEvent("MouseEvents")
      ev.initMouseEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      save_link.dispatchEvent(ev)
    },
  }
}
</script>
