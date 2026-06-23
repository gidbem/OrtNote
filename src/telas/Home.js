import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.tela}>

      <View style={styles.cabecalho}>
        <Text style={styles.iconeChat}>💬</Text>
        <View style={styles.avatarCirculo} />
      </View>

      <View style={styles.barraFiltro}>
        <Text style={styles.iconeFiltro}>⚙️</Text>
        <Text style={styles.iconeLupa}>🔍</Text>
      </View>

      <ScrollView style={styles.lista}>

        <View style={styles.postagem}>
          <View style={styles.postagemHeader}>
            <View style={styles.avatarPequeno} />
            <View>
              <Text style={styles.nomeUsuario}>Lucas Almeida</Text>
              <Text style={styles.tempo}>Há 1h</Text>
            </View>
            <Text style={styles.menuPontos}>•••</Text>
          </View>

          <View style={styles.conteudoPostagem} />

          <View style={styles.acoes}>
            <Text style={styles.iconeAcao}>❤️</Text>
            <Text style={styles.iconeAcao}>💬</Text>
            <Text style={styles.iconeAcao}>⚙️</Text>
            <Text style={styles.iconeAcao}>🔖 4</Text>
          </View>

          <View style={styles.descricaoBox}>
            <Text style={styles.descricaoTexto}>descrição da postagem</Text>
          </View>
        </View>

        <View style={styles.postagem}>
          <View style={styles.postagemHeader}>
            <View style={styles.avatarPequeno} />
            <View>
              <Text style={styles.nomeUsuario}>Júlia Souza</Text>
              <Text style={styles.tempo}>Há 3h</Text>
            </View>
            <Text style={styles.menuPontos}>•••</Text>
          </View>
          <View style={styles.conteudoPostagem} />
        </View>

      </ScrollView>

      <View style={styles.barraInferior}>
        <TouchableOpacity style={styles.itemNav}>
          <Text style={styles.iconeNav}>📁</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemNav, styles.itemNavAtivo]}>
          <Text style={styles.iconeNav}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemNav}>
          <Text style={styles.iconeNav}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemNav}>
          <Text style={styles.iconeNav}>👤</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cabecalho: {
    backgroundColor: '#8B3FBE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 14,
  },
  iconeChat: {
    fontSize: 28,
    color: '#fff',
  },
  avatarCirculo: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ccc',
  },
  barraFiltro: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  iconeFiltro: { fontSize: 18 },
  iconeLupa: { fontSize: 18 },
  lista: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  postagem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    padding: 12,
  },
  postagemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  avatarPequeno: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#bbb',
  },
  nomeUsuario: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#222',
  },
  tempo: {
    fontSize: 11,
    color: '#999',
  },
  menuPontos: {
    marginLeft: 'auto',
    fontSize: 16,
    color: '#555',
  },
  conteudoPostagem: {
    height: 140,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },
  acoes: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 8,
  },
  iconeAcao: {
    fontSize: 18,
  },
  descricaoBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
  },
  descricaoTexto: {
    color: '#777',
    fontSize: 13,
  },
  barraInferior: {
    flexDirection: 'row',
    backgroundColor: '#1DB08E',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  itemNav: {
    alignItems: 'center',
    padding: 6,
  },
  itemNavAtivo: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
  },
  iconeNav: {
    fontSize: 22,
  },
});