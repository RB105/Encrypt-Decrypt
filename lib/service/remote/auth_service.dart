import 'package:crypto/service/local/crypto_service.dart';
import 'package:dio/dio.dart';

class AuthService {
  Future<dynamic> login() async{
    Response response = await Dio().post("http://192.168.1.86:3000/login",data: {
      "email": CryptoService().encrypt("01baxromrajabov@gmail.com")
    });

    print(CryptoService().decrypt(response.data['token']));
  }
}