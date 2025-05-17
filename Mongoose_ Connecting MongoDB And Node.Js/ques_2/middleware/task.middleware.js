const validateTask = (req, res, next) => {
  const { title, description, priority } = req.body;

  if (!title || !description || !priority) {
    return res.status(400).json({ message: "Incomplete Data Received" });
  }

  const validPriorities = ["low", "medium", "high"];
  if (!validPriorities.includes(priority.toLowerCase())) {
    return res.status(400).json({ message: "Invalid priority value" });
  }

  req.body.priority = priority.toLowerCase(); // Normalize case
  next();
};

module.exports = { validateTask };
