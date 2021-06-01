<template>
  <section class="section has-background-white-ter same-page-height ">
    <div class="columns ">
      <div class="column">
        <h1 class="title has-text-primary">This is new blog</h1>
      </div>
    </div>
    <div class="columns ">
      <div class="column">
        <b-field label="Start with an eye-catching title!">
        <b-input placeholder="Title">
          </b-input>
        </b-field>
      </div>
    </div>
    <div class="columns ">
      <div class="column">
        <b-field label ="This canvas is all yours!">
          <Vueditor class="same-page-height has-side-shadow"></Vueditor>
        </b-field>
      </div>
    </div>
    <div class="columns ">
      <div class="column">
        <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <button class="button is-primary">
                  Save As Draft
                </button>
              </p>
               <p class="control">
                <button class="button is-primary">
                  Publish
                </button>
              </p>
            </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
//import MediumEditor from 'vuejs-medium-editor';
import Vue from 'vue';
import Vuex from 'vuex'
import Vueditor from 'vueditor'
import 'vueditor/dist/style/vueditor.min.css' 

let config = {
  toolbar: [
    'removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor', 'divider',
    'bold', 'italic', 'underline', 'strikeThrough', 'links', 'divider', 'subscript', 'superscript',
    'divider', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', '|', 'indent', 'outdent',
    'insertOrderedList', 'insertUnorderedList', '|', 'picture', 'tables', '|', 'switchView' 
  ],
  fontName: [
    {val: 'arial black'}, 
    {val: 'times new roman'}, 
    {val: 'Courier New'}
  ],
  fontSize: ['12px', '14px', '16px', '18px', '0.8rem', '1.0rem', '1.2rem', '1.5rem', '2.0rem'],
  uploadUrl: ''
};

Vue.use(Vuex);
Vue.use(Vueditor, config);

export default {
  name: 'CreateNewBlog',
  components: {

  }
}
</script>