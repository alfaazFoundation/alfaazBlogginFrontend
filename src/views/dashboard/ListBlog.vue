<template>
	<section class="section has-background-white-ter same-page-height">
    <div class="columns ">
      <div class="column">
        <h1 class="title has-text-primary">Your Stories</h1>
      </div>
    </div>
    <b-table
        :data="data"
        ref="table"
        paginated
        per-page="5"
        :opened-detailed="defaultOpenedDetails"
        detailed
        detail-key="first_name"
        @details-open="(row) => $buefy.toast.open(`Expanded ${row.first_name}`)"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page">

      <b-table-column field="first_name" label="Title" sortable v-slot="props">
        <div class="title is-5">
            {{ props.row.first_name }}
        </div>
      </b-table-column>

      <b-table-column field="date" label="Date" sortable centered v-slot="props">
                <span class="tag is-success">
                    {{ new Date(props.row.date).toLocaleDateString() }}
                </span>
      </b-table-column>
      <template #detail="props">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="@/assets/images/alfaazLogoSquare.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ props.row.first_name }} {{ props.row.last_name }}</strong>
                <small>@{{ props.row.first_name }}</small>
                <small>31m</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </div>
          </div>
        </article>
      </template>

      <template #empty>
        <div class="has-text-centered">No records</div>
      </template>

    </b-table>
	</section>
</template>

<script>

export default {
  name: 'ListBlog',
  components: {

  },
  data() {
    const data = [
      { 'first_name': 'Just Somethings!', 'date': '2016-10-15 13:43:27'},
      { 'first_name': 'Go Wild', 'date': '2016-12-15 06:00:53' },
      { 'first_name': 'Desire', 'date': '2016-04-26 06:26:28' },
      {  'first_name': 'Imperfect Living', 'date': '2016-04-10 10:28:46' },
      {  'first_name': 'Priceless Gifts', 'date': '2016-12-06 14:38:38' }
    ]

    return {
      data,
        defaultOpenedDetails: [0],
      selected: data[1]
    }
  }
}
</script>