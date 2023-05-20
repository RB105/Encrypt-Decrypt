import 'package:encrypt/encrypt.dart';

class CryptoService {
  final key = Key.fromBase64("qw34rf5tge2==rdd5ft5==3esw1qw34w");
  final iv = IV.fromBase64("q3456==fr4325try");

  // encrypt
  String encrypt(String encryptData) {
    final encrypter = Encrypter(AES(key, mode: AESMode.cbc));
    return encrypter.encrypt(encryptData, iv: iv).base64;
  }

  // decrypt
  String decrypt(String decryptData) {
    final decrypter = Encrypter(AES(key, mode: AESMode.cbc));
    return decrypter.decrypt64(decryptData, iv: iv);
  }
}
