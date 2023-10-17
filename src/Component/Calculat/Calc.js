import React from "react";
import { useState } from "react";
import "./Calc.css";

// função const usando e alterando o estado
export default function Calc() {
  const [anoNascimento,setAnoNascimento] = useState("");
  const [anoAtual, setAnoAtual] = useState("");
  const [quantidadeDeAnos, setQuantidade] = useState("");

// event.preventDefault impede que a pag de um refresh
// por causa do botao submit que faz isso automatico

  const Calcular = event =>{
    event.preventDefault();
    var minimunAge = 65
    var calculation = anoAtual - anoNascimento
    var media = minimunAge - calculation 
    if (media < minimunAge){
      setQuantidade(media)
    }
   

  }
  return (
    
      <div>
        <form>
          <label>
            Ano de nascimento:
            <input type="text" onChange={(e) => setAnoNascimento(e.target.value) }/>
          </label>
          <br />
          <label>
            Ano atual:
            <input type="text" onChange={(e) => setAnoAtual(e.target.value) } />
          </label>
          <input type="submit" value="Submit" onClick={Calcular}/><br/>
          <label>
            Quantidade de anos para aposentar:
            <input type="text" value={quantidadeDeAnos}  />
          </label>
        </form>
      </div>
  
  );
 }


/*
function Calc(){
var minimunAge = 65
var year = 2023
var registerName = input("Please write your Name")
var registerBirth = int(input("Please write yout year Birth"))
var registerActualYear = int(input("Please write what year do you stay "))
var calculation = var year - registerBirth
var media = var minimunAge - var calculation
Console.log(
    return(media)
)
}; */
