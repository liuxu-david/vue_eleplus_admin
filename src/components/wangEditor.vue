<template>
  <div>
    <!-- <div>
      <button @click="insertText">insert text</button>
      <button @click="printHtml">print html</button>
      <button @click="disable">disable</button>
    </div> -->
    <div style="border: 1px solid #ccc; margin-top: 10px">
      <Toolbar
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
        style="border-bottom: 1px solid #ccc"
      />
      <Editor
        :defaultConfig="editorConfig"
        :mode="mode"
        v-model="valueHtml"
        style="height: 400px; overflow-y: hidden"
        @onCreated="handleCreated"
        @onChange="handleChange"
        @onDestroyed="handleDestroyed"
        @customAlert="customAlert"
        @customPaste="customPaste"
      />
    </div>
    <el-button type="danger" class="btnshare" @click="handleShare"
      >分享</el-button
    >
  </div>
</template>

<script>
  import "@wangeditor/editor/dist/css/style.css";
  import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
  import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
  import { postStory } from "@/service/story";

  export default {
    components: { Editor, Toolbar },
    setup() {
      // 编辑器实例，必须用 shallowRef，重要！
      const editorRef = shallowRef();

      // 内容 HTML
      const valueHtml = ref("");

      const toolbarConfig = {};
      const editorConfig = { placeholder: "请输入想要分享的内容..." };

      // 组件销毁时，也及时销毁编辑器，重要！
      onBeforeUnmount(() => {
        const editor = editorRef.value;
        if (editor == null) return;

        editor.destroy();
      });

      // 编辑器回调函数
      const handleCreated = (editor) => {
        editorRef.value = editor; // 记录 editor 实例，重要！
      };
      const handleChange = (editor) => {
        // console.log("change:", editor.getHtml());
      };
      const handleDestroyed = (editor) => {
        // console.log("destroyed", editor);
      };

      const customAlert = (info, type) => {
        alert(`【自定义提示】${type} - ${info}`);
      };
      const customPaste = (editor, event, callback) => {
        console.log("ClipboardEvent 粘贴事件对象", event);

        // 自定义插入内容
        editor.insertText("xxx");

        // 返回值（注意，vue 事件的返回值，不能用 return）
        callback(false); // 返回 false ，阻止默认粘贴行为
        // callback(true) // 返回 true ，继续默认的粘贴行为
      };

      const insertText = () => {
        const editor = editorRef.value;
        if (editor == null) return;
        editor.insertText("hello world");
      };

      const printHtml = () => {
        const editor = editorRef.value;
        if (editor == null) return;
        // console.log(editor.getHtml());
      };

      const disable = () => {
        const editor = editorRef.value;
        if (editor == null) return;
      };
      const handleShare = () => {
        const value = valueHtml.value.split("<p>")[1].split("</p>")[0];
        valueHtml.value = "";
        postStory(value).then((res) => {
          console.log(res);
          ElMessage({
            message: `${res.data.data}`,
            type: "success",
          });
        });
      };

      return {
        editorRef,
        mode: "default",
        valueHtml,
        toolbarConfig,
        editorConfig,
        handleCreated,
        handleChange,
        handleDestroyed,
        customAlert,
        customPaste,
        insertText,
        printHtml,
        disable,
        handleShare,
      };
    },
  };
</script>
<style lang="less" scoped>
  .btnshare {
    width: 100%;
    margin-top: 10px;
  }
</style>
