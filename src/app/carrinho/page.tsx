import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartList from "@/components/CartList";

export const dynamic = 'force-dynamic';

export default function CarrinhoPage() {
    const protocolId = Math.random().toString(36).substr(2, 9).toUpperCase();
    const serverTime = new Date().toLocaleTimeString('pt-BR');

    const dailyOffer = Math.random() > 0.5
        ? { text: "FRETE GRÁTIS aplicado!", color: "bg-green-100 text-green-800" }
        : { text: "CUPOM: SEBRAE10 disponível", color: "bg-blue-100 text-blue-800" };

    return (
        <main className="bg-gray-50 min-h-screen flex flex-col">
            <Header />

            <section className="container py-large flex-grow">
                <h1 className="heading-2 mb-6">Meu Carrinho</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2">
                        <CartList />
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
                            <h3 className="text-lg font-bold mb-4 text-gray-800">Resumo do Pedido</h3>

                            <div className={`p-3 rounded-md mb-4 text-sm font-bold text-center ${dailyOffer.color}`}>
                                🎉 {dailyOffer.text}
                            </div>

                            <div className="space-y-3 text-sm text-gray-600 mb-6">
                                <div className="flex justify-between">
                                    <span>Protocolo de Segurança:</span>
                                    <span className="font-mono text-gray-900">{protocolId}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Gerado em:</span>
                                    <span>{serverTime}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Renderização:</span>
                                    <span className="badge bg-purple-100 text-purple-800 px-2 py-0.5 rounded text-xs font-bold">SSR (Server-Side)</span>
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <p className="text-xs text-gray-400 text-center">
                                    Esta barra lateral foi renderizada no servidor.
                                    A lista de itens foi hidratada no cliente.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}