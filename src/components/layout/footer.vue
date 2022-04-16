<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <v-footer dark>
      <div class="footer-container">
        <div class="links-container">
          <a :href="github" target="_blank"
            ><i class="fa-brands fa-github fa-2xl"></i
          ></a>
        </div>
        <p>© 2022 TEAM FourFourFour</p>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    github: "https://github.com/four-four-four"
  })
};
</script>
<style>
i {
  color: #f0f0f0;
}
i:hover {
  color: #d1d1d1;
  transform: translateY(-4px); /*  default */
  -webkit-transform: translateY(-4px); /*  크롬 */
  -moz-transform: translateY(-4px); /* FireFox */
  -o-transform: translateY(-4px); /* Opera */
  transition: transform 0.2s;
  -o-transition: transform 0.2s;
  -moz-transition: transform 0.2s;
  -webkit-transition: transform 0.2s;
}
.theme--dark.v-footer {
  background-image: url("/img/wave-haikei.svg") !important;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: 700px;
}
.footer-container {
  color: #f0f0f0;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 600;
  font-size: 20px;
  padding-top: 500px;
  text-align: center;
  margin: auto;
}
.footer-container p {
  text-align: center;
}
.links-container {
  margin-bottom: 20px;
}
i {
  cursor: pointer;
}
</style>
