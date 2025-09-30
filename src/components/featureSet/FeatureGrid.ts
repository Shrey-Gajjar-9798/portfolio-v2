import { Card } from "@/components/ui/card"
import { Shield, Network, Blocks } from "lucide-react"

export function FeaturesSection() {
    const features = [
        {
            icon: Shield,
            title: "30+ Contracts Audited",
            description: "Production-ready smart contracts audited and deployed across multiple blockchain networks",
            gradient: "from-primary/20 to-accent/20",
            iconColor: "text-primary",
        },
        {
            icon: Network,
            title: "Multi-Chain Expertise",
            description:
                "Worked with multiple chains, cross-chain protocols, and EIP standards including ERC4337, EIP 4626, and ERC 7702",
            gradient: "from-accent/20 to-chart-3/20",
            iconColor: "text-accent",
        },
        {
            icon: Blocks,
            title: "DeFi & DePIN Development",
            description: "Extensive experience building DeFi protocols, DePIN infrastructure, and crypto project dApps",
            gradient: "from-chart-3/20 to-primary/20",
            iconColor: "text-chart-3",
        },
    ]

    return (
        <section className= "w-full py-20 px-4 md:px-6 lg:px-8" >
        <div className="max-w-7xl mx-auto" >
            <div className="text-center mb-16 space-y-4" >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance" > Blockchain Expertise </h2>
                    < p className = "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance" >
                        Full - stack Solidity development with proven production experience
                            </p>
                            </div>

                            < div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
                            {
                                features.map((feature, index) => {
                                    const Icon = feature.icon
                                    return (
                                        <SpotlightCard
                key= { index }
                                    className = "group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                                        >
                                        <div
                  className={ `absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300` }
                />

                                        < div className = "relative p-8 space-y-4" >
                                            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-secondary group-hover:bg-background transition-colors duration-300" >
                                                <Icon className={ `w-7 h-7 ${feature.iconColor}` } />
                                                    </div>

                                                    < h3 className = "text-xl font-semibold tracking-tight" > { feature.title } </h3>

                                                        < p className = "text-muted-foreground leading-relaxed" > { feature.description } </p>
                                                            </div>

                                                            < div className = "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-chart-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                                </SpotlightCard>
            )
                            })
}
</div>
    </div>
    </section>
  )
}
