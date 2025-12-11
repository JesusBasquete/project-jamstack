# Nomes: Eduardo Rodrigues Reis - 162654
#        Thiago Novinski Machado - 155476
#        Vinícius Anselmo Rodrigues - 155466

# Sebrae RS - Migração para Next.js (Jamstack)

## Descrição do Projeto

Este projeto consiste na modernização e migração do portal de cursos do **Sebrae RS**. Originalmente desenvolvido como um site estático tradicional (HTML, CSS e JavaScript), o projeto foi evoluído para uma aplicação web moderna utilizando **Next.js**.

O objetivo principal da migração foi adotar a arquitetura **Jamstack** e desacoplar o frontend, permitindo o uso de diferentes métodos de renderização (SSG, ISR, SSR e CSR) para otimizar a performance, o SEO e a experiência do usuário.

---

## Estratégias de Renderização

O projeto utiliza uma abordagem híbrida, onde cada rota utiliza a estratégia de renderização mais adequada ao seu conteúdo:

| Página / Recurso | Tipo | Implementação | Justificativa Técnica |
| :--- | :---: | :--- | :--- |
| **Home Page** (`/`) | **SSG** | `Static Site Generation` | O conteúdo da página inicial (vitrine de cursos, banners) muda com pouca frequência. Gerar o HTML estático no *build* garante o menor *Time to First Byte* (TTFB) e indexação perfeita para SEO. |
| **Detalhes do Curso** (`/curso/[id]`) | **ISR** | `Incremental Static Regeneration` <br> `revalidate: 60` | Detalhes de cursos (preço, descrição) precisam de performance estática, mas podem sofrer alterações. O ISR permite que a página seja atualizada em background a cada 60 segundos sem necessidade de novo *deploy*. `[id]` representa as rotas dinâmicas dos cursos. |
| **Carrinho de Compras** (`/carrinho`) | **SSR** | `Server-Side Rendering` <br> `force-dynamic` | Esta página simula dados sensíveis e em tempo real (protocolo de segurança, hora do servidor, ofertas relâmpago). O SSR garante que esses dados sejam gerados frescos a cada requisição, nunca em cache. |
| **Componentes Interativos** | **CSR** | `Client-Side Rendering` <br> `'use client'` | Componentes como o *SearchForm*, *Carousel* e *Botões de Ação* necessitam de acesso ao DOM e interação do usuário (clicks, estados). Eles são "hidratados" no navegador. |

---

## Comparação de Performance (Lighthouse)

Abaixo, a comparação entre a versão original (HTML/JS) e a versão migrada (Next.js).

| Métrica | Site Original (Legado) | Next.js (Atual) | Análise da Melhoria |
| :--- | :---: | :---: | :--- |
| **Performance** | 92 | **93** | Melhorou um ponto ao arrumar o problema `A large DOM can increase the duration of style calculations`, sendo esse corrigido na troca da arquitetura. |
| **LCP** (Largest Contentful Paint) | ~1.8s | **~1.7s** | O uso do componente `<Image>` do Next.js otimiza automaticamente formatos (WebP) e tamanhos, carregando o banner principal instantaneamente. |
| **Accessibility** | **89** | 88 | Os problemas continuaram os mesmos, mas há um pequeno novo erro, os `Touch targets` estão com um espaçamento um pouco menor, estão muito próximos. |
| **Best Practices** | 100 | **100** | Já seguia boas práticas, o que continua, mesmo em outra estrutura. Correção de problemas de acessibilidade (aria-labels) e uso de HTTPS/Links seguros por padrão mantiveram a qualidade. |
| **SEO** | 91 | **100** | O uso de tags semânticas e a pré-renderização do servidor (SSG/SSR) facilitam a leitura por crawlers. |

---

## Arquitetura de Frontend Desacoplado

Este projeto exemplifica a transição de uma arquitetura monolítica (onde HTML e dados estão frequentemente misturados) para uma arquitetura **desacoplada**:

1.  **Independência de Dados:** O frontend não depende diretamente de um banco de dados conectado. Ele consome dados (simulados em `src/data/courses.js`) como se fossem uma API externa. Isso permite que o backend seja trocado (ex: WordPress Headless, Strapi, API Java) sem quebrar a interface.
2.  **Reutilização:** Componentes como `Header`, `Footer` e `CourseCard` são isolados e reutilizados em diferentes contextos, facilitando a manutenção.
3.  **Escalabilidade:** Ao utilizar SSG e ISR, a carga no servidor é drasticamente reduzida. A maior parte do tráfego é servida diretamente via CDN (Vercel Edge Network), permitindo que o site aguente picos de acesso sem derrubar a infraestrutura.

---

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone (link-repo)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Acesse:** Abra `http://localhost:3000` no seu navegador.
