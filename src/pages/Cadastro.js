import { View, Text, StyleSheet, Image } from "react-native";

import React, { useEffect, useState } from "react";
import COLORS from "../const/Colors";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { Picker } from "@react-native-picker/picker";
import apiBlood from "../service/apiBlood";
import validarCPF from "../utils/validarCpf";
import InputIcon from "../components/InputIcon";
import apiEstados from "../service/apiEstados";
import apiCidades from "../service/apiCidades";

const passo1 = "../assets/Group8.png";

const Cadastro = () => {
    const navigation = useNavigation();

    const [cidades, setCidade] = useState([]);
    const [cidadesSelecionado, setCidadesSelecionado] = useState([]);

    const [estados, setEstado] = useState([]);
    const [estadoSelecionado, setEstadoSelecionado] = useState([]);

    const [sexo, setSexo] = useState([]);
    const [sexoSelecionado, setSexoSelecionado] = useState([]);

    const [tipoSanguineo, setTipoSanguineo] = useState([]);
    const [tipoSanguineoSelecionado, setTipoSanguineoSelecionado] = useState([]);

    useEffect(() => {
        apiBlood.get('/listarTipoSanguineo').then(data => {
            console.log(data);
            setTipoSanguineo(data.data);
          });
    }, [])

    useEffect(() => {
        apiBlood.get('/listarSexo').then(data => {
            console.log(data);
            setSexo(data.data);
          });
    }, [])

    useEffect(() => {
        apiEstados.get('/estados').then(data => {
            // console.log(data);
            setEstado(data.data);
          });
    }, [])

    useEffect(() => {
        apiCidades.get(`/estados/${estadoSelecionado}/municipios`).then(data => {
            // console.log(data);
            setCidade(data.data);
          });
    })

    function aplicar() {
        inputs.cpf = formataCPF(inputs.cpf);
    }

    const formataCPF = (cpf) => {
        cpf = cpf.replace(/\D/g, "");
        cpf = cpf.replace(/^(\d{3})/g, "$1.");
        cpf = cpf.replace(/(\d{3})(\d{3})/g, "$1.$2-");
        return cpf;
    };

    const [inputs, setInputs] = React.useState({
        // O useState sempre representa essa estrutura
        // Chave = inputs / valor = inputs
        nomeCompleto: "",
        email: "",
        cidadeDoacao: "",
        cpf: "",
        senha: "",
        confirmacaoSenha: "",
        sexo: "",
        tipo_sanguineo: "",
    });

    // FUNÇÃO QUE MANIPULA A ENTRADA DE DADOS NA
    // STATE NO MÉTODO OnChangeText
    const handleOnChange = (text, input) => {
        //O setInputs invoca o estado e passa para o prevState
        setInputs(
            (prevState) => (
                console.log(prevState),
                // console.log(input + ` ` + text)

                // Injeção de dados na State
                // Sobrepondo resultado do texto e colocando no prevState
                { ...prevState, [input]: text }
            )
        );
    };
    // ******************** Validação dos dados de cadastro ********************

    // State de erro de preenchimento
    const [errors, setErrors] = React.useState([]);

    // Função Handler que configura as mensagens de erros na state
    // Pegando as mensagens de erros e onde ocorreu (input)
    const handleErrors = (errorMessage, input) => {
        // Quando usamos um par de parenteses quer dizer que estamos dando um RETURN
        setErrors((prevState) => ({
            ...prevState,
            [input]: errorMessage,
        }));
    };

    const handleErrorsPicker = (errorMessage, Picker) => {
        // Quando usamos um par de parenteses quer dizer que estamos dando um RETURN
        setErrors((prevState) => ({
            ...prevState,
            [Picker]: errorMessage,
        }));
    };

    // Função de validação
    const validate = () => {
        let validate = true;

        // Quando máo tem conteúdo o validate ficará falso e aparecerá a mensagem
        if (!inputs.nomeCompleto) {
            validate = false;
            handleErrors("Informe o nome completo", "nomeCompleto");
            // console.log('Título em branco')
        } else if(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/^\(\)0-9]/gi.test(inputs.nomeCompleto)){
            validate = false;
            handleErrors("Elementos especias e pontuação não são permitidos", "nomeCompleto");
        }
        if (!inputs.email) {
            validate = false;
            handleErrors("Informe o seu e-mail", "email");
            // console.log('Descrição em branco')
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputs.email)
        ) {
            validate = false;
            handleErrors("Email inválido", "email");
        }
        if (!inputs.cidadeDoacao) {
            validate = false;
            handleErrorsPicker("Informe a cidade de doação", "cidadeDoacao");
            // console.log('Descrição em branco')
        }
        if (!inputs.cpf) {
            validate = false;
            handleErrors("Informe o seu CPF corretamente", "cpf");
        } else if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(inputs.cpf)) {
            validate = false;
            handleErrors("CPF inválido", "cpf");
        } else if (validarCPF(inputs.cpf)) {
            validate = false;
            handleErrors("CPF inválido", "cpf");
        }
        if (!inputs.senha) {
            validate = false;
            handleErrors("Cadastre sua senha", "senha");
            // console.log('Capa em branco')
        }
        if (!inputs.confirmacaoSenha) {
            validate = false;
            handleErrors("Informa sua senha novamente", "confirmacaoSenha");
            // console.log('Capa em branco')
        }
        if (validate) {
            // Envia os dados para a API cadastrar.
            cadastrar();
        }

        // console.log(errors);
    };

    // Função que cria o cadastro com o post
    const cadastrar = () => {
        try {
            // const response = apiBlood.post("/cadastrarDoador", {
            //     nome_completo: inputs.nomeCompleto,
            //     email: inputs.email,
            //     id_cidade: inputs.cidadeDoacao,
            //     cpf: inputs.cpf,
            //     senha: inputs.senha,
            //     confirmacaoSenha: inputs.confirmacaoSenha,
            //     id_sexo: inputs.sexo,
            //     id_tipo_sanguineo: inputs.tipoSanguineo,
            // });
            console.warn(inputs);
            console.log(inputs);
            navigation.navigate("Terms");
        } catch (error) {
            error.response.data;
        }
    };

    return (
        <Layout>
            <View>
                <Text style={estilos.textTitle}>Cadastro</Text>
            </View>
            <View style={estilos.viewForm}>
                <Input
                    name="name"
                    placeholder="Nome Completo"
                    value={inputs.nomeCompleto}
                    iconName="account"
                    error={errors.nomeCompleto}
                    onFocus={() => {
                        handleErrors(null, "nomeCompleto");
                    }}
                    keyboardType="default"
                    onChangeText={(text) =>
                        handleOnChange(text, "nomeCompleto")
                    }
                />
                <Input
                    name="email"
                    placeholder="E-Mail"
                    iconName="email"
                    value={inputs.email}
                    error={errors.email}
                    onFocus={() => {
                        handleErrors(null, "email");
                    }}
                    keyboardType="default"
                    onChangeText={(text) => handleOnChange(text, "email")}
                />
                <View style={estilos.selectContainerPessoal}>
                    <Text style={estilos.label}></Text>
                    <View style={estilos.sexo}>
                        <Picker
                            placeholder="Sexo"
                            onFocus={() => {
                                handleErrors(null, "cidadeDoacao");
                            }}
                            selectedValue={sexoSelecionado}
                            onValueChange={(itemValue) => setSexo(itemValue)}
                        >
                            {sexo.map((sex) => {
                                return <Picker.Item label={sex.sigla} value={sex.id} />;
                            })}
                        </Picker>
                    </View>
                    <View style={estilos.tipo_sanguineo}>
                        <Picker
                            placeholder="Tipo sanguineo"
                            onFocus={() => {
                                handleErrors(null, "cidadeDoacao");
                            }}
                            selectedValue={tipoSanguineoSelecionado}
                            onValueChange={(itemValue) =>
                                setTipoSanguineoSelecionado(itemValue)
                            }
                        >
                            {tipoSanguineo.map((sanguineo) => {
                                return (
                                    <Picker.Item
                                        label={sanguineo.tipo_sanguineo}
                                        value={sanguineo.id}
                                    />
                                );
                            })}
                        </Picker>
                    </View>
                </View>
                <View style={estilos.selectContainer}>
                    <Text style={estilos.label}></Text>
                    <View style={estilos.formContainer}>
                        <View style={estilos.cidadeDoacao}>
                            <Picker
                                onFocus={() => {
                                    handleErrors(null, "cidadeDoacao");
                                }}
                                selectedValue={cidadesSelecionado}
                                onValueChange={(itemValue) =>
                                    setCidadesSelecionado(itemValue)
                                }
                            >
                                {cidades.map((city) => {
                                    return (
                                        <Picker.Item
                                            label={city.nome}
                                            value={city.id}
                                        />
                                    );
                                })}
                            </Picker>
                        </View>
                        <View style={estilos.estadoDoacao}>
                            <Picker
                                onFocus={() => {
                                    handleErrors(null, "estadoDoacao");
                                }}
                                selectedValue={estadoSelecionado}
                                onValueChange={(itemValue) =>
                                    setEstadoSelecionado(itemValue)
                                }
                            >
                                {estados.map((estado) => {
                                    return (
                                        <Picker.Item
                                            label={estado.sigla}
                                            value={estado.id}
                                        />
                                    );
                                })}
                            </Picker>
                        </View>
                    </View>
                </View>

                <Input
                    name="cpf"
                    placeholder="CPF"
                    values={inputs.cpf}
                    iconName="card-account-details"
                    error={errors.cpf}
                    onFocus={() => {
                        handleErrors(null, "cpf");
                    }}
                    onChangeText={(text) => handleOnChange(text, "cpf")}
                    keyboardType="numeric"
                    onBlur={() => {
                        aplicar(inputs.cpf);
                    }}
                    maxLength={14}
                />
                <InputIcon
                    name="senha"
                    icon="lock"
                    placeholder="Senha"
                    values={inputs.senha}
                    error={errors.senha}
                    onFocus={() => {
                        handleErrors(null, "senha");
                    }}
                    keyboardType="default"
                    onChangeText={(text) => handleOnChange(text, "senha")}
                />
                <InputIcon
                    name="confirmacaoSenha"
                    icon="lock"
                    placeholder="Confirmação de senha"
                    values={inputs.confirmacaoSenha}
                    error={errors.confirmacaoSenha}
                    onFocus={() => {
                        handleErrors(null, "confirmacaoSenha");
                    }}
                    keyboardType="default"
                    onChangeText={(text) =>
                        handleOnChange(text, "confirmacaoSenha")
                    }
                />
                <View style={estilos.botoes}>
                    <Button
                        back
                        textBack
                        title="Voltar"
                        onPress={() => {
                            navigation.navigate("Splash");
                        }}
                    />
                    <Button title="Avançar" onPress={validate} />
                </View>
            </View>
        </Layout>
    );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewForm: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 15,
    },
    textTitle: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        color: COLORS.vermelhoPrincipal,
        fontWeight: "bold",
        fontSize: 25,
    },
    imagemFundo: {
        justifyContent: "flex-end",
        flex: 3,
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },
    botoes: {
        flexDirection: "row",
        width: 334,
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        marginTop: 10,
    },
    passo: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: COLORS.branco,
        resizeMode: "cover",
    },
    selectContainer: {
        top: 15,
    },
    selectContainerPessoal: {
        flexDirection: "row",
        top: 15,
        width: 334,
        marginTop: 10,
    },
    formContainer: {
        width: 334,
        borderColor: COLORS.preto,
        flexDirection: "row",
        marginTop: 10,
        bottom: 10,
    },
    cidadeDoacao: {
        width: "60%",
        height: 55,
        borderColor: COLORS.preto,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: COLORS.branco,
        marginRight: "5%",
    },
    estadoDoacao: {
        width: "35%",
        height: 55,
        borderColor: COLORS.preto,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: COLORS.branco,
    },
    sexo: {
        width: "35%",
        height: 55,
        borderColor: COLORS.preto,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: COLORS.branco,
        marginRight: "5%",
    },
    tipo_sanguineo: {
        width: "60%",
        height: 55,
        borderColor: COLORS.preto,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: COLORS.branco,
    },
});

export default Cadastro;
