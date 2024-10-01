<template>
  <v-card width="90%" height="50">
    <v-card-text class="py-1">
      <v-row class="align-center">
        <v-col class="text-center my-2" cols="3">
          <font-awesome-layers class="fa-2x fa-fw">
            <font-awesome-icon class="text-secondary-darken-2" icon="fa-regular fa-circle" size="lg" />
            <font-awesome-icon class="text-secondary" icon="fa-solid fa-magnifying-glass" size="2xs" />
          </font-awesome-layers>
        </v-col>
        <v-col class="px-2 text-end line-clamp-2 text-primary-darken-2" cols="3"><span>Aantal dozen</span></v-col>
        <v-col class="px-2 text-center line-clamp-2 text-primary-darken-2" cols="3"><span>m<sup>2</sup> per doos</span></v-col>
        <v-col class="px-2 text-center line-clamp-2 align-center text-primary-darken-2" cols="3"><span>totaal m<sup>2</sup></span></v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
