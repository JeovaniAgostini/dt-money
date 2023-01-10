import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

const searchFormSchema = z.object({
    searchInput: z.string()
})

/*Retorna a tipagem dos campos do
formulário através de inferência
dos tipos*/
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { fetchTransactions } = useContext(TransactionsContext);

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    });

    /*usar "handle" na nomenclatura para
    identificar funções disparadas por
    ações de usuários ou eventos*/
    async function handleSearchTransactions(data: SearchFormInputs) {
        await fetchTransactions(data.searchInput);
        // console.log(data)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                {...register('searchInput')}
                type="text"
                placeholder="Busque por transações"
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    );
}