<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">Início</v-btn>
      <v-btn flat to="/portfolio">Portfólio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>
    
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat>Finalizar Dia</v-btn>
      <v-menu offset-y>
        <v-btn flag slot="activator">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Carregar Dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>