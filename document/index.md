# 开发规范
### 文件命名规范 

 - 建议使用全小写 文件命名例如： 个人中心  user-center 利用  中划线 - 分割
 - vue 文件 options API 顺序：可根据个人习惯定义
 
 ```
export default {
  name: 'Home',
  mixins: [],
  components: {},
  computed: {},
  watch: {}
  methods: {},
  ...其他生命周期函数
  mounted () {
  },
}
 ```
