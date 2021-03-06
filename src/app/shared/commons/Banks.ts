export class Banks {

  public static get(): Object[] {
      const banks = [
          { "code": "001", "bank": "Banco do Brasil S.A." }, { "code": "003", "bank": "Banco da Amazonia S.A." },
          { "code": "004", "bank": "Banco do Nordeste do Brasil S.A." }, { "code": "012", "bank": "Banco Standard de Investimentos S.A." },
          { "code": "014", "bank": "Natixis Brasil S.A. Banco Múltiplo" }, { "code": "019", "bank": "Banco Azteca do Brasil S.A" },
          { "code": "021", "bank": "Banestes S.A. Banco do Estado do Espírito Santo S.A." }, { "code": "024", "bank": "Banco de Pernambuco S.A. – BANDEPE" },
          { "code": "025", "bank": "Banco Alfa S.A" }, { "code": "029", "bank": "Banco Banerj S.A" }, { "code": "031", "bank": "Banco Beg S.A." },
          { "code": "033", "bank": "Banco Santander (Brasil) S.A" }, { "code": "036", "bank": "Banco Bradesco BBI S.A." },
          { "code": "037", "bank": "Banco do Estado do Pará S.A" }, { "code": "040", "bank": "Banco Cargil S.A" },
          { "code": "041", "bank": "Banco do Estado do Rio Grade do Sul S.A." }, { "code": "044", "bank": "Banco BVA S.A" },
          { "code": "045", "bank": "Banco Opportunity S.A." }, { "code": "047", "bank": "Banco do Estado de Sergipe S.A" },
          { "code": "062", "bank": "Hipercard Banco Múltiplo S.A" }, { "code": "063", "bank": "Banco IBI S.A. – Banco Múltiplo" },
          { "code": "065", "bank": "Banco Lemon S.A" }, { "code": "066", "bank": "Banco Morgan Stanley S.A" },
          { "code": "069", "bank": "BPN Brasil Banco Múltiplo S.A." }, { "code": "070", "bank": "BRB – Banco de Brasilia S.A" },
          { "code": "072", "bank": "Banco Rural Mais S.A" }, { "code": "073", "bank": "BB Banco Popular do Brasil S.A." },
          { "code": "074", "bank": "Banco J. Safra S.A" }, { "code": "075", "bank": "Banco CR2 S/A" },
          { "code": "076", "bank": "Banco KEB do Brasil S.A" }, { "code": "077", "bank": "Banco Inter S/A" },
          { "code": "078", "bank": "BES Investimentos do Brasil S.A." }, { "code": "079", "bank": "JBS Banco S/A" },
          { "code": "081", "bank": "Concórdia Banco S.A." }, { "code": "082", "bank": "Banco Topázio S.A" },
          { "code": "083", "bank": "Banco da China Brasil S.A" }, { "code": "096", "bank": "Banco BM&F de Serviços de Liquidação e Custodia S.A." },
          { "code": "104", "bank": "Caixa Econômica Federal" }, { "code": "107", "bank": "Banco BBM S/A" }, { "code": "151", "bank": "Banco Nossa Caixa S.A" },
          { "code": "184", "bank": "Banco Itaú BBA S.A." }, { "code": "204", "bank": "Banco Bradesco Cartões S.A." },
          { "code": "208", "bank": "Banco UBS Pactual S.A." }, { "code": "212", "bank": "Banco Matone S.A." }, { "code": "213", "bank": "Banco Arbi S.A." },
          { "code": "214", "bank": "Banco Dibens S.A" }, { "code": "215", "bank": "Banco Comercial e de Investimento Sudameris S.A." },
          { "code": "217", "bank": "Banco John Deere S.A." }, { "code": "218", "bank": "Banco Bonsucesso S.A." }, { "code": "222", "bank": "Banco Calyon brasil S.A." },
          { "code": "224", "bank": "Banco Fibra S.A" }, { "code": "225", "bank": "Banco Brascan S.A." }, { "code": "229", "bank": "Banco Cruzeiro Do Sul S.A." },
          { "code": "230", "bank": "Unicard Banco Múltiplo S.A." }, { "code": "233", "bank": "Banco GE Capital S.A." }, { "code": "237", "bank": "Banco Bradesco S.A." },
          { "code": "241", "bank": "Banco Classico S.A." }, { "code": "243", "bank": "Banco Máxima S.A." }, { "code": "246", "bank": "Banco ABC Brasil S.A." },
          { "code": "248", "bank": "Banco Boavista Interatlantico S.A" }, { "code": "249", "bank": "Banco Investicred Unibanco S.A." },
          { "code": "250", "bank": "Banco Schahin S.A." }, { "code": "254", "bank": "Paraná Banco S.A." }, { "code": "263", "bank": "Banco Cacique S.A." },
          { "code": "265", "bank": "Banco Fator S.A" }, { "code": "266", "bank": "Banco Cedula S.A" }, { "code": "300", "bank": "Banco de La Nacion Argentina" },
          { "code": "318", "bank": "Banco BMG S.A." }, { "code": "320", "bank": "Banco Industrial e Comercial S.A" }, { "code": "341", "bank": "Banco Itaú S.A" },
          { "code": "366", "bank": "Banco Societé Generale Brasil S.A." }, { "code": "370", "bank": "Banco Westlb do Brasil S.A" },
          { "code": "376", "bank": "Banco J.P. Morgan S.A." }, { "code": "389", "bank": "Banco Mercantil do Brasil S.A." },
          { "code": "394", "bank": "Banco Finasa BMC S.A." }, { "code": "399", "bank": "HSBC Bank Brasil S.A. – Banco Múltiplo" },
          { "code": "409", "bank": "Unibanco-União de Bancos Brasileiros S.A" }, { "code": "412", "bank": "Banco Capital S.A." },
          { "code": "422", "bank": "Banco Safra S.A." }, { "code": "453", "bank": "Banco Rural S.A" }, { "code": "456", "bank": "Banco de Tokyo-Mitsubishi UFJ Brasil S/A" },
          { "code": "464", "bank": "Banco Sumitomo Mitsui Brasileiro S.A" }, { "code": "473", "bank": "Banco Caixa Geral – Brasil S.A." },
          { "code": "477", "bank": "Citibank N.A." }, { "code": "479", "bank": "Banco Itaubank S.A" }, { "code": "487", "bank": "Deutsche Bank S.A. – Banco Alemao" },
          { "code": "488", "bank": "JPMorgan Chase Bank, National Association" }, { "code": "492", "bank": "Ing Bank N.V." },
          { "code": "494", "bank": "Banco de la Republica Oriental del Uruguay" }, { "code": "495", "bank": "Banco de la Provincia de Buenos Aires" },
          { "code": "505", "bank": "Banco Credit Suisse (Brasil) S.A." }, { "code": "600", "bank": "Banco Luso Brasileiro S.A" },
          { "code": "604", "bank": "Banco Industrial Do Brasil S.A" }, { "code": "610", "bank": "Banco VR S.A" }, { "code": "611", "bank": "Banco Paulista S.A." },
          { "code": "612", "bank": "Banco Guanabara S.A." }, { "code": "613", "bank": "Banco Pecunia S.A" }, { "code": "623", "bank": "Banco Panamericano S.A." },
          { "code": "626", "bank": "Banco Ficsa S.A" }, { "code": "630", "bank": "Banco Intercap S.A" }, { "code": "633", "bank": "Banco Rendimento S.A." },
          { "code": "634", "bank": "Banco Triangulo S.A." }, { "code": "637", "bank": "Banco Sofisa S.A" }, { "code": "638", "bank": "Banco Prosper S.A." },
          { "code": "641", "bank": "Banco Alvorada S.A." }, { "code": "643", "bank": "Banco Pine S.A." }, { "code": "652", "bank": "Itaú Unibanco Banco Múltiplo S.A" },
          { "code": "653", "bank": "Banco Indusval S.A." }, { "code": "654", "bank": "Banco A.J. Renner S.A" }, { "code": "655", "bank": "Banco Votorantim S.A" },
          { "code": "707", "bank": "Banco Daycoval S.A." }, { "code": "719", "bank": "Banif – Banco Internacional do Funchal (Brasil), S.A" },
          { "code": "721", "bank": "Banco Credibel S.A." }, { "code": "734", "bank": "Banco Gerdau S.A" }, { "code": "735", "bank": "Banco Pottencial S.A" },
          { "code": "738", "bank": "Banco Morada S.A" }, { "code": "739", "bank": "Banco BGN S.A." }, { "code": "740", "bank": "Banco Barclays S.A" },
          { "code": "741", "bank": "Banco Ribeirao Preto S.A" }, { "code": "743", "bank": "Banco Semear S.A." }, { "code": "745", "bank": "Banco Citibank S.A." },
          { "code": "746", "bank": "Banco Modal S.A" }, { "code": "747", "bank": "Banco Rabobank International Brasil S.A" },
          { "code": "748", "bank": "Banco Cooperativo Sicredi S.A." }, { "code": "749", "bank": "Banco Simples S.A" }, { "code": "751", "bank": "Dresdner Bank Brasil S.A. Banco Multiplo" },
          { "code": "752", "bank": "Banco BNP Paribas Brasil S.A" }, { "code": "753", "bank": "NBC Bank Brasil S. A. – Banco Múltiplo" },
          { "code": "756", "bank": "Banco Cooperativo do Brasil S.A. – Bancoob" }, { "code": "757", "bank": "Banco KEB do Brasil S.A." }
      ];

      return banks.sort((a, b) => parseInt(a['code']) - parseInt(b['code']));
  }
}
