// Bring in action from api etc here. 
import React, { useState } from 'react';
import Form from '../forms/Form';
// import { login } from '../api/authentication';
// import { setToken } from '../api/token';

import { Text, TextInput, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

// const LoginScreen = ({ navigation }) => {
    const DetailView = () => {   
        
        const handleResult = async (result) => {
            if (result.ok && result.data) {
            //   await setToken(result.data.auth_token);
              navigation.navigate('Home');
            } else if (result.status === 401) {
              throw new Error('Invalid login.');
            } else {
              throw new Error('Something went wrong.');
            }
          };

          return (
            <SafeAreaView style={styles.container}> 
              <ScrollView style={styles.scrollView}>
            <Form
            //   action={login}
              afterSubmit={handleResult}
              buttonText="Submit"
              fields={{
                CompanyName: {
                  label: 'CompanyName',
                  inputProps: {
                    keyboardType: 'company-name',
                  },
                },                
                ExecutivePersonName: {
                  label: 'Executive Person Name',
                  inputProps: {
                    keyboardType: 'Authorized-name',
                  },
                }, 
                ContactPerson: {
                  label: 'Contact Person',
                  inputProps: {
                    keyboardType: 'Contact-name',
                  },
                },                                
                Status: {
                  label: 'Status',
                  inputProps: {
                    keyboardType: 'Status',
                  },
                }, 
                DirectCell: {
                  label: 'DirectCell',
                  inputProps: {
                    keyboardType: 'DirectCell',
                  },
                }, 
                FollowUpDate: {
                  label: 'FollowUpDate',
                  inputProps: {
                    keyboardType: 'FollowUpDate',
                  },
                },                                                                 
                OwnerStatus: {
                  label: 'OwnerStatus',
                  inputProps: {
                    keyboardType: 'OwnerStatus',
                  },
                },   
                Street: {
                  label: 'Street',
                  inputProps: {
                    keyboardType: 'Street',
                  },
                },                                                                                
                City: {
                  label: 'City',
                  inputProps: {
                    keyboardType: 'City',
                  },
                },                                                                                
                State: {
                  label: 'State',
                  inputProps: {
                    keyboardType: 'State',
                  },
                },                                                                                

                email: {
                  label: 'Email',
                  inputProps: {
                    keyboardType: 'email-address',
                  },
                },
              }}
            />
            </ScrollView>
            </SafeAreaView>
          );
        
};

export default DetailView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
    error: {
      marginBottom: 20,
      height: 17.5,
    },
  });
