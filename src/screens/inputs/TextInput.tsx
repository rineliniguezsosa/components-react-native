import React from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../styles/theme';
import { Card } from '../../components/ui/Card';
import { ScrollView, Text, TextInput } from 'react-native';
import { useForm } from '../../hooks/useForm';

export const TextInputScreen = () => {
    const {form,handleChange} = useForm({
        nombre:'',
    });
  return (
    <ScrollView>
      <CustomView margin>
        <Title safe text="TextInput"/>
        <Card>
          <TextInput
          style={globalStyles.input}
          placeholder="Nombre completo"
          autoCapitalize="words"
          autoCorrect={false}
          value={form.nombre}
          onChangeText={(text) => handleChange('nombre',text)}
          />
        </Card>
        <Card>
          <Text>{JSON.stringify(form,null,2)}</Text>
        </Card>
      </CustomView>
    </ScrollView>
  );
};
