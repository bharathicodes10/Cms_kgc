import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
    const [loading, setLoading] = React.useState(true);
    const [nombre, setNombre] = React.useState("");

    const fetchDatos = async () => {
        return fetch("http://localhost:8000/api/consulta", {
            method: "POST",
            headers: new Headers({ Accept: "application/json", "Content-Type": "application/json" }),
            body: JSON.stringify({
                codigoParticipante: "1520",
                contrato: "135927"
            })
        })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.Participante["@attributes"].Cod == 1) {
                    switch (responseJson.Participante.Status.Codigos["@attributes"].Codigo) {
                        case "400":
                            alert(responseJson.Participante.Status.Codigos["@attributes"].Error);
                            break;
                        case "300":
                            alert(responseJson.Participante.Status.Codigos["@attributes"].Error);
                            break;
                        default:
                            console.log("Error interno");
                            break;
                    }
                } else {
                    this.setState({ isLoading: false });
                    setNombre(responseJson.Participante.InfoParticipante["@attributes"].Nombre);
                }
            })
            .catch(function() {
                alert("No es posible conectar con el servidor.");
            });
    };

    return (
        <View>
            <Button title="press me" onPress={fetchDatos} />
            <Text>{nombre}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});