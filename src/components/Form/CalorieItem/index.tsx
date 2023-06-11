import React from 'react';
import { View, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validationSchema';
import { CalorieItemData } from './type';
import { Input } from 'react-native-elements';
import NumericInput from '../NumericInput';

type CalorieItemFormProps = {
  onSubmit: (data: CalorieItemData) => void;
};

const CalorieItemForm: React.FC<CalorieItemFormProps> = ({ onSubmit }) => {

  const { control, handleSubmit, formState: { errors } } = useForm<CalorieItemData>({
    resolver: yupResolver(validationSchema),
  });

  return (
    <View>
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <Input
              label="Nome"
              placeholder="Descrição"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorStyle={{ color: 'red' }}
              errorMessage={errors.description?.message}
            />
          </View>
        )}
      />

      <Controller
        control={control}
        name="amount"
        render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <NumericInput
              name="amount"
              label="Quantidade de kcal"
              placeholder="Apenas números"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errors={errors}
            />
          </View>
        )}
      />

      <Button title="Adicionar item" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default CalorieItemForm;
