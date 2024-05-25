import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";

export function Players() {
  const [team, setTeam] = useState("");
  const [players, setPlayers] = useState([]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Filter title={item} isActive={item === team} onPress={() => setTeam(item)} />}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
    </Container>
  );
}