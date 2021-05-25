using System;

namespace EstruturaDoPrograma.Exemplos
{
    class pilha
    {
        posicao primeiro;

        public void Empilha(object item)
        {
                primeiro = new posicao(primeiro, item);
        }
        public object Desempilha()
        {
            if (primeiro == null)
            {
                throw new InvalidOperationException("A pilha esta vazia");
            }
            object resultado = primeiro.item;
            primeiro = primeiro.proximo;
            return resultado;   
        }
        class posicao
        {
            public posicao proximo;
            public object item;
            public posicao(posicao proximo, object item)
            {
                    this.proximo = proximo;
                    this.item = item;

            }
        }
    }
}

