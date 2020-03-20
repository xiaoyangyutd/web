<body>
    <button id="other">反选</button>
    <input type="checkbox" id="all" />全选
    <input type="checkbox" class="check" />1
    <input type="checkbox" class="check" />2
    <input type="checkbox" class="check" />3
    <script>
      var checkbox = document.getElementsByClassName('check')
      var checkAll = document.getElementById('all')
      var checkOther = document.getElementById('other')
      checkAll.onclick = function() {
        var flag = true
        for (var i = 0; i < checkbox.length; i++) {
          if (!checkbox[i].checked) flag = false
        }
        if (flag) {
          for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false
          }
        } else {
          for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = true
          }
        }
      }
      checkOther.onclick = function() {
        for (var i = 0; i < checkbox.length; i++) {
          checkbox[i].checked = !checkbox[i].checked
        }
      }
    </script>
  </body>

复制代码