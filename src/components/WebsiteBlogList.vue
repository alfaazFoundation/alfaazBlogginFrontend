<template>
  <section class="section has-background-white-bis">
    <div class="columns">
      <div class="column is-offset-2 is-8">
        <h1 class="title has-text-primary has-text-centered ">
          Blog List
        </h1>

        <div class="columns">
          <div class="column is-12-mobile ">
            <blog-card
              :title="blog.title"
              :content="blog.content"
              :author-name="blog.authorName"
              :published-on="blog.publishedOn"
            >
            </blog-card>
          </div>
        </div>

        <div class="columns">
          <div class="column is-12-mobile ">
            <blog-card
                :title="blog.title"
                :content="blog.content"
                :author-name="blog.authorName"
                :published-on="blog.publishedOn"
            >
            </blog-card>
          </div>
        </div>

        <div class="columns">
          <div class="column is-12-mobile ">
            <blog-card
                :title="blog.title"
                :content="blog.content"
                :author-name="blog.authorName"
                :published-on="blog.publishedOn"
            >
            </blog-card>
          </div>
        </div>

        <div class="columns">
          <div class="column is-12-mobile ">
            <blog-card
                :title="blog.title"
                :content="blog.content"
                :author-name="blog.authorName"
                :published-on="blog.publishedOn"
            >
            </blog-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogCard from "@/components/BlogCard";
export default {
  name: "WebsiteBlogList",
  components: {BlogCard},
  data() {
    return {
      blog:{
        title:"First Title that can be long you kn be long you kn be long you kn be long you kn be long you knowcan be long you knowcan be long you know ",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis., consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis., con",
        authorName:"Shivendra Singh Tanwar",
        publishedOn:1623175822307
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &.is-horizontal {
    display: flex;

    .card-image {
      //width: 100%;
      //height: 100%;
    }

    .card-stacked {
      flex-direction: column;
      flex: 1 1 auto;
      display: flex;
      position: relative;

      .card-content {
        flex-grow: 1;
      }
    }
  }

  &.is-fullimage {
    background-color: transparent;
    .card-image {
      color: #fff !important;
      .card-stacked {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
        text-shadow: 0px 0px 2px #000000;

        .card-footer {
          border-color: transparent;
        }

        .title,
        .subtitle {
          color: inherit;
        }

        a {
          color: inherit;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  //   .card-footer {
  //     .card-footer-item {
  //       padding-left: 1.5rem;
  //       padding-right: 1.5rem;
  //     }

  //     div.card-footer-item {
  //       justify-content: unset;
  //     }
  //   }
}
</style>