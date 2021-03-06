﻿/// <reference path="../Namespace.js" />
/// <reference path="../../Componentes/Dialog.js" />
/// <reference path="../../Componentes/Tabela.js" />


RM.Precificacao.ViewModel.MainViewModel = function () {

    this.botoes = new RM.Precificacao.Componente.Botao('button, a.botao, .botoes a, ' +
        'input[type=submit], input[type=button], input[type=reset]');

    this.tabelaConsultaMapaOfertaServicos = new RM.Precificacao.Elemento.TabelaConsultaMapaDeOfertaDeServicos();

    this.popupConsultaMapaOfertaServicos =
        new RM.Precificacao.Componente.Dialog('consultaMapaOfertaServico', 'Mapa de Oferta de Serviços', 
                                              800, 510, this.tabelaConsultaMapaOfertaServicos);

};