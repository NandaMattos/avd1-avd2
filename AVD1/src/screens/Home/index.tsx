import { useState } from "react";
import { Pressable, Keyboard, View, Text, TextInput } from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";

export function Home() {
  const [date, setDate] = useState("")
  const [value, setValue] = useState("")

  return (

    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>

      <View style={{ flex: 1, alignItems: "center", backgroundColor: '#969CB2', width: '100%', height: '100%' }}>

        <View style={{ width: '100%', height: '20%', backgroundColor: '#5636D3' }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 30 }}>Controle de Gastos</Text>
          </View>
        </View>
        <View style={{ width: '90%', marginTop: '5%', height: '100%' }} >
          <View style={{ height: '6%', marginBottom: '7%' }}>
            <TextInput placeholder="Descrição" placeholderTextColor={"#363F5F"} style={{ backgroundColor: '#FFFFFF', padding: '5%', color: "#363F5F" }} />
          </View>
          <View style={{ height: '6%', marginBottom: '7%' }}>
            <MaskInput value={value} onChangeText={setValue} mask={Masks.BRL_CURRENCY} placeholder="Valor" keyboardType="number-pad" placeholderTextColor={"#363F5F"} style={{ backgroundColor: '#FFFFFF', padding: '5%', color: "#363F5F" }} />
          </View>
          <View style={{ height: '6%', marginBottom: '7%' }}>
            <MaskInput value={date} onChangeText={setDate} mask={Masks.DATE_DDMMYYYY} placeholder="Data Compra" keyboardType="number-pad" placeholderTextColor={"#363F5F"} style={{ backgroundColor: '#FFFFFF', padding: '5%', color: "#363F5F" }} />
          </View>
          <View style={{ height: '6%', marginBottom: '7%' }}>
            <TextInput placeholder="Categoria" placeholderTextColor={"#363F5F"} style={{ backgroundColor: '#FFFFFF', padding: '5%', color: "#363F5F" }} />
          </View>
          <View style={{ height: '6%', marginBottom: '7%' }}>
            <TextInput placeholder="Local de Compra" placeholderTextColor={"#363F5F"} style={{ backgroundColor: '#FFFFFF', padding: '5%', color: "#363F5F" }} />
          </View>
        </View>
      </View>
    </Pressable>

  )
}