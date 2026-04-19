import os
import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D, Dropout
from tensorflow.keras.models import Model
from tensorflow.keras.preprocessing import image_dataset_from_directory

# Parameters
BATCH_SIZE = 32
IMG_SIZE = (128, 128)
DATASET_DIR = 'dataset'
EPOCHS = 5  # Keep it small for quick training on local machines

def build_model(num_classes):
    # Load MobileNetV2 pre-trained on ImageNet without the top classification layer
    base_model = MobileNetV2(weights='imagenet', include_top=False, input_shape=(128, 128, 3))
    
    # Freeze the base model
    base_model.trainable = False
    
    # Add custom classification head
    x = base_model.output
    x = GlobalAveragePooling2D()(x)
    x = Dense(128, activation='relu')(x)
    x = Dropout(0.2)(x)
    predictions = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=base_model.input, outputs=predictions)
    
    model.compile(
        optimizer='adam',
        loss='sparse_categorical_crossentropy',
        metrics=['accuracy']
    )
    return model

def main():
    print("Loading dataset from directory...")
    
    # Create training and validation datasets
    train_dataset = image_dataset_from_directory(
        DATASET_DIR,
        validation_split=0.2,
        subset="training",
        seed=123,
        image_size=IMG_SIZE,
        batch_size=BATCH_SIZE
    )
    
    val_dataset = image_dataset_from_directory(
        DATASET_DIR,
        validation_split=0.2,
        subset="validation",
        seed=123,
        image_size=IMG_SIZE,
        batch_size=BATCH_SIZE
    )
    
    class_names = train_dataset.class_names
    print(f"Detected classes: {class_names}")
    
    # Optimization for performance
    AUTOTUNE = tf.data.AUTOTUNE
    train_dataset = train_dataset.prefetch(buffer_size=AUTOTUNE)
    val_dataset = val_dataset.prefetch(buffer_size=AUTOTUNE)
    
    print("Building Transfer Learning model (MobileNetV2)...")
    model = build_model(num_classes=len(class_names))
    
    print("Starting training phase...")
    model.fit(
        train_dataset,
        validation_data=val_dataset,
        epochs=EPOCHS
    )
    
    print("Training complete! Saving model to model.h5...")
    model.save('model.h5')
    print("Saved successfully. The backend will automatically use this model on next startup.")

if __name__ == '__main__':
    main()
