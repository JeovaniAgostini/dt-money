import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useSummary } from "../../hooks/useSummary";
import { formatPrice } from "../../utils/formatPrice";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    const summary = useSummary();

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>

                <strong>{formatPrice(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>- {formatPrice(summary.outcome)}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>

                <strong>{formatPrice(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    );
}