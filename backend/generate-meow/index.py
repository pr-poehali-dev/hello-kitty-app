import json
import base64
import math
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Generate realistic kitten meow sound
    Args: event - HTTP request data; context - execution context
    Returns: WAV audio file as base64
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    sample_rate = 22050
    duration = 1.2
    num_samples = int(sample_rate * duration)
    
    samples = []
    for i in range(num_samples):
        t = i / sample_rate
        
        frequency = 800 + 400 * math.sin(t * 8) - 200 * (t / duration)
        
        amplitude = math.exp(-t * 2) * (1 - t / duration)
        
        vibrato = 1 + 0.05 * math.sin(t * 25)
        
        wave = math.sin(2 * math.pi * frequency * t * vibrato)
        wave += 0.3 * math.sin(2 * math.pi * frequency * 2 * t)
        wave += 0.15 * math.sin(2 * math.pi * frequency * 3 * t)
        
        sample_value = int(127 + 127 * amplitude * wave)
        sample_value = max(0, min(255, sample_value))
        samples.append(sample_value)
    
    wav_header = bytearray([
        0x52, 0x49, 0x46, 0x46,
        0x00, 0x00, 0x00, 0x00,
        0x57, 0x41, 0x56, 0x45,
        0x66, 0x6d, 0x74, 0x20,
        0x10, 0x00, 0x00, 0x00,
        0x01, 0x00,
        0x01, 0x00,
        0x22, 0x56, 0x00, 0x00,
        0x22, 0x56, 0x00, 0x00,
        0x01, 0x00,
        0x08, 0x00,
        0x64, 0x61, 0x74, 0x61,
        0x00, 0x00, 0x00, 0x00
    ])
    
    data_size = len(samples)
    file_size = 36 + data_size
    
    wav_header[4:8] = file_size.to_bytes(4, 'little')
    wav_header[40:44] = data_size.to_bytes(4, 'little')
    
    wav_data = wav_header + bytearray(samples)
    
    audio_base64 = base64.b64encode(wav_data).decode('utf-8')
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'audio': audio_base64})
    }
