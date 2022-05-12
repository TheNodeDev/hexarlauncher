#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
use std::process::Command;

fn main() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![my_custom_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn my_custom_command() {
  println!("I was invoked from JS!");
  Command::new("java")
          .arg("-jar")
          .arg("./game.jar")
          .output()
          .expect("failed to execute process");
}