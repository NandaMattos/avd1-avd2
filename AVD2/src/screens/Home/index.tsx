import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import { AntDesign, EvilIcons, FontAwesome5 } from "@expo/vector-icons";
import MaskInput, { Masks } from "react-native-mask-input";
import { Dropdown } from "react-native-element-dropdown";

export function Home() {
  const [value, setValue] = useState("")
  const [login, setLogin] = useState(false)
  const data = [
    { label: 'Categoria 1', value: 'Categoria1' },
  ]
  return (


    <View style={{ flex: 1, alignItems: "center", width: '100%', height: '100%', backgroundColor: '#969CB2' }}>
      {!login ?
        <>
          <View style={{ width: '100%', height: '75%', backgroundColor: '#5636D3' }}>
            <View style={{ flex: 1, justifyContent: 'center', marginRight: '18%', marginLeft: '18%', alignItems: 'center' }}>

              <FontAwesome5 name="coins" size={40} color="#d89608" />
              <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 30, marginBottom: '18%' }}>gofinances</Text>
              <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 35, marginBottom: '50%' }}>Controle suas finanças de forma muito simples</Text>

              <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 18, width: '80%' }}>Faça seu login com uma das contas abaixo</Text>
            </View>
          </View>
          <View style={{ width: '100%', height: '25%', backgroundColor: '#d89608' }}>
            <View style={{ zIndex: 1, marginTop: '-7%', height: '100%', marginRight: '18%', marginLeft: '18%' }}>
              <TouchableOpacity onPress={() => setLogin(true)} style={{ width: '100%', backgroundColor: '#FFF', justifyContent: 'center', height: '25%', marginBottom: '7%' }}>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                  <AntDesign name="google" size={24} color="black" />
                  <Text style={{ textAlign: 'center', fontSize: 15 }}>Entrar com Google</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setLogin(true)} style={{ width: '100%', backgroundColor: '#FFF', justifyContent: 'center', height: '25%', marginBottom: '7%' }}>
                <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                  <AntDesign name="apple1" size={24} color="black" />
                  <Text style={{ textAlign: 'center', fontSize: 15 }}>Entrar com Apple</Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </>
        :
        <>
          <View style={{ width: '100%', height: '20%', backgroundColor: '#5636D3', justifyContent: 'center' }}>
            <Text style={{ color: "#FFF", textAlign: 'center', fontSize: 30 }}>Cadastro</Text>
          </View>

          <View style={{ width: '90%', marginTop: '8%', height: '100%' }} >
            <View style={{ height: '6%', marginBottom: '7%' }}>
              <TextInput placeholder="Nome" placeholderTextColor={"#363F5F"} style={{ backgroundColor: '#FFFFFF', padding: '5%', color: "#363F5F" }} />
            </View>
            <View style={{ height: '6%', marginBottom: '7%' }}>
              <MaskInput value={value} onChangeText={setValue} mask={Masks.BRL_CURRENCY} placeholder="Preço" keyboardType="number-pad" placeholderTextColor={"#363F5F"} style={{ backgroundColor: '#FFFFFF', padding: '5%', color: "#363F5F" }} />
            </View>

            <View style={{ justifyContent: 'space-between', flexDirection: 'row', height: '6%', marginBottom: '7%' }}>
              <TouchableOpacity style={{ width: '45%', backgroundColor: '#FFF', justifyContent: 'center' }}>
                <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }}>
                  <EvilIcons name="arrow-up" size={24} color="green" />
                  <Text style={{ textAlign: 'center', fontSize: 15 }}>Income</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '45%', backgroundColor: '#FFF', justifyContent: 'center' }}>
                <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }}>
                  <EvilIcons name="arrow-down" size={24} color="red" />

                  <Text style={{ textAlign: 'center', fontSize: 15 }}>Outcome</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ height: '6%' }}>
              <Dropdown
                style={{ backgroundColor: '#FFFFFF', padding: '5%', }}
                labelField="label"
                placeholder="Categoria"
                valueField="value"
                data={data}
                onChange={() => { }}
              />
            </View>
          </View>
        </>
      }
    </View>

  )
}