import { useState } from "react";

import { Header } from "../../components/Header";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { Summary } from "../../components/Summary";
import { TransactionsTable } from "../../components/TransactionsTable";

import { Container } from "./styles";

export function Dashboard() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);

  function handleOpenNewTrasactionModal() {
    setIsNewTrasactionModalOpen(true);
  }

  function handleCloseNewTrasactionModal() {
    setIsNewTrasactionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModal} />
      <Container>
      
        <NewTransactionModal 
					isOpen={isNewTrasactionModalOpen}
					onRequestClose={handleCloseNewTrasactionModal}
				/>

        <Summary />
        <TransactionsTable />
      </Container>
    </>
  )
}