<template>
  <section class="section has-background-white-ter same-page-height ">
    <div class="columns">
      <div class="column box">
        <div class="columns ">
          <div class="column">
            <h1 class="title has-text-primary">Create something magical!</h1>
          </div>
        </div>
        <div class="columns ">
          <div class="column">
            <b-field label="Start with an eye-catching title!">
              <b-input placeholder="Title" v-model="blogData.title">
              </b-input>
            </b-field>
          </div>
        </div>
<!--        <div class="columns ">
          <div class="column">
            <b-field label ="This canvas is all yours!">
                <b-input type="textarea" v-model="blogData.content"></b-input>
            </b-field>
          </div>
        </div>-->
        <div class="columns ">
          <div class="column">
              <ckeditor :editor="editor" v-model="blogData.content"></ckeditor>
          </div>
        </div>
        <div class="columns ">
          <div class="column">
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <button class="button is-primary" @click="saveDraft">
                  Save As Draft
                </button>
              </p>
              <p class="control">
                <button class="button is-primary" @click="publishBlog">
                  Publish
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
const baseUrl = process.env.VUE_APP_API_SERVER;
import axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: 'CreateNewBlog',
  components: {
    ckeditor: CKEditor.component
  },
  mounted() {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  data() {
    return {
      editor: ClassicEditor,
      blogData: {
        id:"",
        title: "",
        content: "",
        blogStatus: ""
      }
    }
  },
  methods:{
    saveDraft(){
      this.$data.blogData.blogStatus="DRAFT"
      console.log(this.$data.blogData)
          this.axiosInstance.post('/api/blog',this.$data.blogData)
          .then(response=>{
            console.log(response);
            this.$data.blogData.id = response.data
               this.$buefy.toast.open({
               duration: 3000,
               message: `Draft Saved`,
               position: 'is-bottom',
               type: 'is-success'
             });
          })
          .catch(error=>{
            console.error(error);
            this.$buefy.toast.open({
              duration: 3000,
              message: `Something went wrong`,
              position: 'is-bottom',
              type: 'is-danger'
            })
          })
    },
    publishBlog(){
      this.$data.blogData.blogStatus="PUBLISHED"
      this.axiosInstance.post('/api/blog',this.$data.blogData)
          .then(response=>{
            console.log(response);
            this.$buefy.toast.open({
              duration: 3000,
              message: `Blog Published`,
              position: 'is-bottom',
              type: 'is-success'
            });
            this.$router.push('/dashboard/list-blog');
          })
          .catch(error=>{
            console.error(error);
            this.$buefy.toast.open({
              duration: 3000,
              message: `Something went wrong`,
              position: 'is-bottom',
              type: 'is-danger'
            })
          })
    }
  }
}
</script>