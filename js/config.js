/* ============================================================
   CONFIGURAÇÃO DO SITE – é aqui que adiciona fotos e logotipos.
   1) Coloque a foto na pasta indicada (img/projetos, img/clientes, img/hero).
   2) Escreva o nome do ficheiro no campo "img" (ex.: "img/projetos/cctv-01.webp").
   3) Guarde, faça commit no GitHub e o site atualiza.
   Se "img" ficar vazio, o site mostra a ilustração/marca provisória.
   ============================================================ */
window.SITE={
  // Imagem de fundo do topo (opcional). Ex.: "img/hero/topo.jpg"
  hero:"",
  // Trabalhos realizados (slides). Categorias: "TI", "Segurança Eletrónica", "Complementares"
  projetos:[
{t:"Videovigilância para instalações empresariais",c:"Segurança Eletrónica",d:"Projeto, instalação e configuração de sistema CCTV.",img:"",alt:"Sistema de videovigilância instalado",art:"cctv"},
{t:"Rede estruturada de escritórios",c:"TI",d:"Cablagem estruturada e rede wireless para ambiente de escritório.",img:"",alt:"Rack de rede estruturada",art:"rack"},
{t:"Controlo de acessos",c:"Segurança Eletrónica",d:"Leitores e gestão de acessos integrados com a videovigilância.",img:"",alt:"Leitor de controlo de acessos",art:"acesso"},
{t:"Manutenção de parque informático",c:"TI",d:"Manutenção preventiva e corretiva de equipamentos.",img:"",alt:"Técnico a fazer manutenção de computadores",art:"manut"},
{t:"Sistema de deteção e monitoramento",c:"Segurança Eletrónica",d:"Sensores e monitoramento integrados num único painel.",img:"",alt:"Painel de monitoramento",art:"monit"},
{t:"Climatização e sistemas de frio",c:"Complementares",d:"Instalação e assistência a equipamentos de climatização.",img:"",alt:"Equipamento de climatização instalado",art:"frio"}],
  // Logotipos de clientes. Ex.: {n:"Nome do cliente",img:"img/clientes/cliente1.png"}
  clientes:[{n:"Cliente 1",img:""},{n:"Cliente 2",img:""},{n:"Cliente 3",img:""},{n:"Cliente 4",img:""},{n:"Cliente 5",img:""},{n:"Cliente 6",img:""},{n:"Cliente 7",img:""},{n:"Cliente 8",img:""}]
};
