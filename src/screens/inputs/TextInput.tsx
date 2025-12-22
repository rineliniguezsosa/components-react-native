import React, { useContext } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../styles/theme';
import { Card } from '../../components/ui/Card';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { useForm } from '../../hooks/useForm';
// import { colors } from '../../styles/colors';
import { ThemeContext } from '../../context/ThemeContext';

export const TextInputScreen = () => {
    const {form,handleChange} = useForm({
        nombre:'',
    });

    const { colors } = useContext(ThemeContext);
  return (
    <ScrollView>
      <CustomView margin>
        <Title safe text="TextInput"/>
        <Card>
          <TextInput
          style={[globalStyles.input,{ color: colors.text, backgroundColor: colors.background}]}
          placeholder="Nombre completo"
          placeholderTextColor={colors.text}
          autoCapitalize="words"
          autoCorrect={false}
          value={form.nombre}
          onChangeText={(text) => handleChange('nombre',text)}
          />
        </Card>
        <View style={{height: 10}} />
        <Card>
          <Text style={{color:colors.text}}>{JSON.stringify(form,null,2)}</Text>
        </Card>
      </CustomView>
    </ScrollView>
  );
};
