import { useState } from 'react';  // CÓ SẴN từ React

export default function TodoApp() {
  const [todos, setTodos] = useState([]);  // CÓ Sẵn: useState
  const [input, setInput] = useState('');   // CÓ Sẵn: useState

  // Hàm TỰ TẠO: Thêm todo mới
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, done: false }]);
      setInput('');
    }
  };

  // Hàm TỰ TẠO: Xóa todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Hàm TỰ TẠO: Đánh dấu hoàn thành
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'Arial' }}>
      <h1>📝 My To-do List</h1>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}  // CÓ Sẵn: onChange
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}  // CÓ Sẵn: onKeyPress
          placeholder="Add new task..."
          style={{ flex: 1, padding: '10px', fontSize: '16px' }}
        />
        <button 
          onClick={addTodo}  // CÓ Sẵn: onClick
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (  // CÓ Sẵn: map
          <li 
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px',
              background: '#f5f5f5',
              marginBottom: '10px',
              borderRadius: '5px',
              textDecoration: todo.done ? 'line-through' : 'none'
            }}
          >
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}  // CÓ Sẵn: onChange
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
            <span style={{ flex: 1 }}>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ padding: '5px 10px', background: '#ff4444', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && <p style={{ color: '#999' }}>No tasks yet!</p>}
    </div>
  );
}